import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from '../../services/university.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-book',
  templateUrl: 'university.component.html',
  styleUrls: ['university.component.css']
})
export class UniversityComponent implements OnInit {
	route;
  university;
  universityId;
	universityService;
  globalService;

	static get parameters() {
		return [ActivatedRoute, UniversityService, GlobalService];
	}

  constructor(route, universityService, globalService) {
  	this.route = route;
  	this.universityService = universityService;
    this.globalService = globalService;
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.universityId = params["id"];
  		this.universityService.getUniversityById(this.universityId).subscribe(university => {
  			this.university = university;
  		});
  	});
  }

  addToCart() {
    this.globalService.addToCart(this.university);
    alert("Successfully added");
  }
}
