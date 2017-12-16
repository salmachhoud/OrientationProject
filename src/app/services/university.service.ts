import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UniversityService {
	http: any;

	static get parameters() {
		return [Http];
	}

  constructor(http) {
  	this.http = http;
  }

  getAllUniversties() {
  	let searchUrl = "http://localhost:5000/universities";
  	return this.http.get(searchUrl).map(res => res.json());
  }

  getUniversityById(id) {
    let searchUrl = "http://localhost:5000/university?universityId=" + id;
    return this.http.get(searchUrl).map(res => res.json());
  }

  deleteUniversityById(id) {
    let searchUrl = "http://localhost:5000/university?universityId=" + id;
    return this.http.delete(searchUrl).map(res => res.json());
  }

  addUniversity(universityData) {
    let searchUrl = "http://localhost:5000/university";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.post(searchUrl, JSON.stringify({ universityData: universityData }), options).map(res => res.json());
  }

  updateUniversity(universityData) {
    let searchUrl = "http://localhost:5000/university";
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({
      headers: headers
    });

    return this.http.put(searchUrl, JSON.stringify({ universityData: universityData }), options).map(res => res.json());
  }
}
