import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../services/university.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booklist',
  templateUrl: 'universitylist.component.html',
  styleUrls: ['universitylist.component.css']
})
export class UnivesitylistComponent implements OnInit {
	universityService: any;
	universityList;
  router;

	static get parameters() {
		return [UniversityService, Router];
	}

  constructor(universityService, router) {
  	this.universityService = universityService;
    this.router = router;
  }

  ngOnInit() {
  	this.universityService.getAllUniversties().subscribe(universityList => {
  		this.universityList = universityList;
  	});
  }

  navigateToBook(university) {
    this.router.navigate(["home/university"], {
      queryParams: {
        university: JSON.stringify(university)
      }
    })
  }

}
