import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeServiceService } from '../services/home-service.service';
import { FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //data-binding for dropdown menu 
  //and also check box
  rentsale: string;
  area: any;

  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
  }

  onAddHomeInfo(form: NgForm) {
    if (!form.valid || this.area == null || this.rentsale == null) {//checking area and rentsale as I has to put these outside of the form to get them to work
      form.resetForm();
      alert("You must fill out all of the fields");  // alerts users to fill in the form fully by displaying an alert message
      return;
    }
    //check values in console for debug
    //console.log(this.rentsale)
    //console.log(this.area)
    //console.log(form.value)
    this.homeService.AddHomeInfo(this.rentsale,
      this.area,
      form.value.address,
      form.value.eircode,
      form.value.name, 
      form.value.email,
      form.value.number, 
      form.value.cost).subscribe(
        (data) => {
          console.log(data);
        }
        
        
      );
    form.resetForm();
  }

}


