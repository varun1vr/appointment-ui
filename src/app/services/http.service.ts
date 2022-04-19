import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public saveData(data: any, url: string):Observable<any> {
    return this.http.post(environment.apiUrl+url,data,{'headers':new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':  '*', 'Access-Control-Allow-Credentials': 'true' || ''})});
    
  }

  public getListData(url: string):Observable<any> {
    return this.http.get(environment.apiUrl+url,{'headers':new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin':  '*', 'Access-Control-Allow-Credentials': 'true' || ''})});
    
  }
}
