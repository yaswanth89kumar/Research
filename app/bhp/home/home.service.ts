import { Injectable } from '@angular/core';
import { GlobalConstants } from '../shared/util/global-constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public apiUrl = GlobalConstants.apiUrl;

  constructor(
    public http: HttpClient
  ) {
  }

  getLocations(): Observable<any> {
    return this.http.get(this.apiUrl + 'get_location_names');
  }
}
