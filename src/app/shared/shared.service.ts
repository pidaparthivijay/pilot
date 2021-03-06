import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpClient: HttpClient) { }
  getSchoolData() {
    return this.httpClient.get<any>('assets/json/jsonContent.json')
      .toPromise()
      .then(res => res.schoolData)
      .then(data => { return data; });
  }

  getProjectData() {
    return this.httpClient.get<any>('assets/json/jsonContent.json')
      .toPromise()
      .then(res => res.projectData)
      .then(data => { return data; });
  }
}
