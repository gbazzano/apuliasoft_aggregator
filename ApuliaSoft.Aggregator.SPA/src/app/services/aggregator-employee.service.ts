import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AggregatorEmployeeService {

  constructor(private http: HttpClient) {
    // No particular requirements for constructor.
  }

  getAllEmployees() : Observable<Employee[]> {
    let finalUrl = `${environment.hostName}${environment.common.apiUrl.employee}/all`;
    return this.http.get<Employee[]>(finalUrl);
  }
}
