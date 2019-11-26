import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeServiceService } from '../services/home-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //data-binding for dropdown menu 
  //and also check box
  rentsale:string;
  area:any;

  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
  }

  onAddHomeInfo(form: NgForm){
    if(!form.valid || this.area==null || this.rentsale==null)
    {
      form.resetForm();
      return;
    }
    console.log(this.rentsale)
    console.log(this.area)
    console.log(form.value)
    this.homeService.AddHomeInfo(this.rentsale, this.area,form.value.address,
       form.value.eircode, form.value.poster).subscribe(
         ()=>{

         }
       );
    form.resetForm();
  }

}
