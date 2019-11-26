import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import {Router, ActivatedRoute} from '@angular/router';
import {HomeServiceService} from '../services/home-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  home:any=[];
    constructor(private homeService:HomeServiceService, private router:Router,
      private route:ActivatedRoute) { }
  
    ngOnInit() {
      console.log(this.route.snapshot.params['id'])
      this.homeService.GetHome(this.route.snapshot.params['id']).subscribe(
        (data) =>{
            this.home = data;
            console.log(this.home);       
        }
      );
    }
    onEditHome(form:NgForm){
      // this.homeService.UpdateHome(this.home._id, form.value.title,
      //   form.value.year, form.value.poster).subscribe();
    }
  }
