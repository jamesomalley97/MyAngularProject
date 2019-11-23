import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  Homes: any = [];
  constructor(private homeService: HomeServiceService) { }


  ngOnInit() {
    this.homeService.GetHomeInfo().subscribe((data) => {
      this.Homes = data.homes;
      console.log(this.Homes);
    })
  }}
