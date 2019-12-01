import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeServiceService } from '../services/home-service.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //data-binding for dropdown menu 
  //and also check box
  rentsale: string = "default";
  area: any;

  constructor(private homeService: HomeServiceService, private router: Router) { }

  ngOnInit() {
  }

  onAddHomeInfo(form: NgForm) {
    if (!form.valid || this.area == null || this.rentsale == null) {//checking area and rentsale as I had to put these outside of the form to get them to work
      form.resetForm();
      alert("You must fill out all of the fields");  // alerts users to fill in the form fully by displaying an alert message
      return;
    }
    this.homeService.AddHomeInfo(this.rentsale,
      this.area,
      form.value.address,
      form.value.eircode,
      form.value.name,
      form.value.email,
      form.value.number,
      form.value.cost,
      form.value.description,
      form.value.houseimage).subscribe(
        (data) => {
          console.log(data);

    //go to correct page of home added 
    //adapted from https://angular.io/api/router/Router#navigateByUrl
    //
    if (this.area == "Ballybane") {
      this.router.navigateByUrl("read")
    }
    else if (this.area == "Ballybrit") {
      this.router.navigateByUrl("ballybrit")

    } else if (this.area == "Renmore") {
      this.router.navigateByUrl("renmore")
    }

    else if (this.area == "Salthill") {
      this.router.navigateByUrl("salthill")
    }

    else if (this.area == "Newcastle") {
      this.router.navigateByUrl("newcastle")
    }
        }
      );
    //clears all fields in form
    form.resetForm();
    

    
  }

}


