import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../services/university.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: 'adduniversity.component.html',
  styleUrls: ['adduniversity.component.css']
})
export class AddUniversityComponent implements OnInit {

  name: string;
  category: string;
  description: string;
  adresse: string;
  image_url: string;
  id: string;

  universityService: any;
  router;
  route;

  editMode: boolean = false;

  static get parameters() {
    return [UniversityService, ActivatedRoute, Router];
  }

  constructor(universityService, route, router) {
    this.universityService = universityService;
    this.route = route;
    this.router = router;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params["universityId"]) {
        let universityId = params["universityId"];
        this.editMode = true;
        this.universityService.getUniversityById(universityId).subscribe(university => {
          this.id = university._id;
          this.name = university.name;
          this.category = university.category;
          this.description = university.description;
          this.adresse = university.adresse;
          this.image_url = university.image_url;
        });
      }
    });
  }

  addUniversity() {
    if(this.editMode) {
      let universityData = {
        id: this.id,
        name: this.name,
        category: this.category,
        description: this.description,
        adresse:this.adresse,
        image_url:this.image_url
      }

      this.universityService.updateUniversity(universityData).subscribe(result => {
        if(result.success) {
          alert(result.message);
          this.router.navigate(["/manage/universities"]);
        }
      });
    } else {
      let universityData = {
        name: this.name,
        category: this.category,
        description: this.description,
        adresse:this.adresse,
        image_url:this.image_url
      }

      this.universityService.addUniversity(universityData).subscribe(res => {
        if(res.success) {
          alert(res.message);
          this.router.navigate(["/manage/universities"]);
        } else {
          alert(res.message);
        }
      });
    }
  }

}
