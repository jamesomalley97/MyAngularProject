import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-ballybrit',
  templateUrl: './ballybrit.component.html',
  styleUrls: ['./ballybrit.component.css']
})
export class BallybritComponent implements OnInit {

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
