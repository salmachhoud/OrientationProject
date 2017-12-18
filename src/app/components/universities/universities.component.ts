import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../services/university.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universities',
  templateUrl: 'universities.component.html',
  styleUrls: ['universities.component.css']
})
export class UniversitiesComponent implements OnInit {
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

  deleteUniversity(id) {
  	this.universityService.deleteUniversityById(id).subscribe(result => {
  		if(result.success) {
        for(var index = 0; index < this.universityList.length; index++) {
          if(this.universityList[index]._id == result.id) {
            this.universityList.splice(index, 1);
          }
        }
      } else {
        alert("University not successfully deleted");
      }
  	});
  }

  editUniversity(id) {
    this.router.navigate(["/manage/university/add"], {
      queryParams: {
        universityId: id
      }
    });
  }
}
