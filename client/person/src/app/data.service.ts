import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { map, filter, scan } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: Http) {}

  getPersons() {
    return this.http
      .get("http://localhost:3000/api/test")
      .pipe(map(res => res.json()));
  }

  addPerson(newPerson) {
    let headers = new Headers();
    headers.append("content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/api/post_route", newPerson, {
        headers: headers
      })
      .pipe(map(res => res.json()));
  }
  deletePerson(id) {
    return this.http
      .delete("http://localhost:3000/api/person/" + id)
      .pipe(map(res => res.json()));
  }
  updatePerson(newPerson) {
    let headers = new Headers();
    headers.append("content-Type", "application/json");
    return this.http
      .put("http://localhost:3000/api/person/" + newPerson._id, newPerson, {
        headers: headers
      })
      .pipe(map(res => res.json()));
  }
}
