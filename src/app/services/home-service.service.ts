import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Home} from '../home.model';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http:HttpClient) { }

  GetHomeInfo():Observable<any>{
    return this.http.get('http://localhost:4000/api/homes');
  }

  GetHome(id:String):Observable<any>{
    return this.http.get('http://localhost:4000/api/homes/'+id);
  }

  AddHomeInfo(rentsale:string, area:string,address:string, eircode:string, name:string,email:string,number:string,   cost:string, description:string,houseimage:string ):Observable<any>{
    console.log(area);
    const home:Home = {rentsale:rentsale, area:area , address:address,name:name, eircode:eircode,  email:email, number:number,  cost:cost, houseimage:houseimage, description:description };
    return this.http.post('http://localhost:4000/api/homes', home)
  }

  UpdateHome(id:String,rentsale:string, area:string,address:string, eircode:string, number:string,name:string,email:string,  cost:string, description:string,houseimage:string):Observable<any>{
    const home:Home = {rentsale:rentsale, area:area , address:address, eircode:eircode, number:number, name:name, email:email,  cost:cost, houseimage:houseimage, description:description};
    return this.http.put('http://localhost:4000/api/homes/'+id, home);
  }

  DeleteHome(id:String):Observable<any>{
    return this.http.delete('http://localhost:4000/api/homes/'+id);
  }

  
}
