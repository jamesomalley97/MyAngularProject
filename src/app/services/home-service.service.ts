import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Home} from './home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  GetHomeInfo():Observable<any>{
    return this.http.get('http://localhost:4000/api/homes');
  }

  AddHomeInfo(title:string,year:string,poster:string):Observable<any>{
    const home:Home = {title:title, year:year, poster:poster};
    return this.http.post('http://localhost:4000/api/homes', home)
  }
}
