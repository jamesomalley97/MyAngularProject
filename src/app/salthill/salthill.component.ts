import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-salthill',
  templateUrl: './salthill.component.html',
  styleUrls: ['./salthill.component.css']
})
export class SalthillComponent implements OnInit {

  Homes: any = [];
  constructor(private homeService: HomeServiceService) { }

  ngOnInit() {
    this.homeService.GetHomeInfo().subscribe((data) => {
      this.Homes = data.homes;
      console.log(this.Homes);
    })
  }

  onDelete(id: String) {
    console.log("Deleting movie with id: " + id);
    this.homeService.DeleteHome(id).subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }

}
