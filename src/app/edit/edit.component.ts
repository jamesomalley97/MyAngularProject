import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  home: any = [];
  rentsale: string;
  area: any;
  constructor(private homeService: HomeServiceService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.homeService.GetHome(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.home = data;
        console.log(this.home);
        this.rentsale = data.rentsale;
        this.area = data.area;
      }
    );
  }
  onEditHome(form: NgForm) {
    if (!form.valid || this.area == null || this.rentsale == null) { //checking area and rentsale as I has to put these outside of the form to get them to work
      form.resetForm();
      alert("House editing Failed, all fields must be filled");   // alerts users to fill in the form fully by displaying an alert message
      return;
    }
    this.homeService.UpdateHome(this.home._id, this.rentsale, this.area, form.value.address,
      form.value.eircode, form.value.name, form.value.email, form.value.number, form.value.cost, form.value.description, form.value.houseimage).subscribe();
    alert("Succesfully edited Home")
    // routes user to page / area  they edited
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


}

