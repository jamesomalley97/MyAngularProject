import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { HomeServiceService } from '../services/home-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
  }

  onAddHome(form: NgForm){
    
    if(!form.valid)
    {
      return;
    }

    console.log(form.value);
    

    this.homeService.AddHomeInfo(form.value.title,
      form.value.year, form.value.poster).subscribe(
        ()=>{

        }
      );
      console.log(form.value);
      form.resetForm();
  }

}
