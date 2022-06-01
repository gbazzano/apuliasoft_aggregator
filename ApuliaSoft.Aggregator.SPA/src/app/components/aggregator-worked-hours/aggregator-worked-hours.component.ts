import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { WorkedHoursColType } from 'src/app/enums/worked-hours-col-type.enum';
import { ProjectHelper } from 'src/app/helpers/aggregator-project.helper';
import { WorkedHours } from 'src/app/models/api/worked-hours.model';
import { Employee } from 'src/app/models/employee.model';
import { TranslatedWorkedHours } from 'src/app/models/internal/translated-worked-hours.model';
import { WorkedHoursColConfig } from 'src/app/models/internal/worked-hours-col-config.model';
import { Project } from 'src/app/models/project.model';
import { AggregatorEmployeeService } from 'src/app/services/aggregator-employee.service';
import { AggregatorProjectService } from 'src/app/services/aggregator-project.service';

@Component({
  selector: 'app-aggregator-worked-hours',
  templateUrl: './aggregator-worked-hours.component.html',
  styleUrls: ['./aggregator-worked-hours.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AggregatorWorkedHoursComponent implements OnInit {
  subscriptions: Subscription[] = [];

  employees: Employee[] = [];
  projects: Project[] = [];
  workedHours: WorkedHours[] = [];
  loadingError: boolean = false;

  data: TranslatedWorkedHours[] = [];

  columnsConfig: WorkedHoursColConfig[] = [
    { prop: 'project', title: 'Project', baseData: 'projectId' },
    { prop: 'employee', title: 'Employee', baseData: 'employeeId' },
    { prop: 'date', title: 'Date', baseData: 'date', type: WorkedHoursColType.Date },
    { prop: 'hours', title: 'Hours' }
  ];
  
  columnsShown: WorkedHoursColConfig[] = [];
  columnsHidden: WorkedHoursColConfig[] = [...this.columnsConfig.filter(cc => cc.baseData != undefined)];

  columnsToDisplay: string[] = [];
  
  constructor(private svcEmployee: AggregatorEmployeeService,
              private svcProject: AggregatorProjectService) {
    //No specific actions required on constructor.
  }

  ngOnInit(): void {
    let combSubsc = combineLatest({
      projects: this.svcProject.getAllProjects(),
      employees: this.svcEmployee.getAllEmployees(),
      workedHours: this.svcProject.getWorkedHours()
    }).subscribe({
      next: (res) => {
        if (res.projects == undefined
            || res.employees == undefined
            || res.workedHours == undefined) {
          return;
        }

        res.projects.forEach(p => {
          this.projects[p.id] = p;
        });

        res.employees.forEach(e => {
          this.employees[e.id] = e;
        });

        this.workedHours = res.workedHours;

        //#region Debugging messages.
        console.log("PROJECTS ARRAY");
        console.log(this.projects);
        console.log("EMPLOYEES ARRAY");
        console.log(this.employees);
        console.log("WORKED HOURS ARRAY");
        console.log(this.workedHours);
        //#endregion

        this.updateTable();
      },
      error: () => {
        this.loadingError = true;
      }
    })

    this.subscriptions.push(combSubsc);
  }

  updateTable() {
    let filter = this.columnsShown.map(cc => cc.baseData!);

    this.columnsToDisplay = this.columnsShown.map(cc => cc.prop);
    if (this.columnsToDisplay.length > 0)
      this.columnsToDisplay.push('hours');
    this.data = ProjectHelper.workedHoursGroup(this.workedHours, filter) as TranslatedWorkedHours[];

    this.data.forEach(wh => {
      if(wh.projectId)
        wh.project = this.projects[wh.projectId].title;

      if(wh.employeeId)
        wh.employee = this.employees[wh.employeeId].name;
    })
  }

  showCol(col: WorkedHoursColConfig) {
    const index = this.columnsHidden.indexOf(col);
    this.columnsHidden.splice(index, 1);

    this.columnsShown.push(col);

    this.updateTable();
  }

  hideCol(col: WorkedHoursColConfig) {
    const index = this.columnsShown.indexOf(col);
    this.columnsShown.splice(index, 1);

    this.columnsHidden.push(col);

    this.updateTable();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => {
      if (s) s.unsubscribe();
    })
  }
}
