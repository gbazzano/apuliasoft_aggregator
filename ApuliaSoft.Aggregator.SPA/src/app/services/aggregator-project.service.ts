import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkedHours } from '../models/api/worked-hours.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class AggregatorProjectService {

  constructor(private http: HttpClient) {
    // No particular requirements for constructor.
  }

  getAllProjects() : Observable<Project[]> {
    let finalUrl = `${environment.hostName}${environment.common.apiUrl.project}/all`;
    return this.http.get<Project[]>(finalUrl);
  }

  getWorkedHours() : Observable<WorkedHours[]> {
    let finalUrl = `${environment.hostName}${environment.common.apiUrl.project}/worked-hours`;
    return this.http.get<WorkedHours[]>(finalUrl);
  }
}