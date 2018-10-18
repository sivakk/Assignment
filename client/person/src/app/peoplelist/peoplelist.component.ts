import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { person } from "../person";

@Component({
  selector: "app-peoplelist",
  templateUrl: "./peoplelist.component.html",
  styleUrls: ["./peoplelist.component.css"],
  providers: [DataService]
})
export class PeoplelistComponent implements OnInit {
  shoppingList: person[] = [];
  selectedItem: person;
  toggleForm: boolean = false;

  constructor(private dataservice: DataService) {}

  getPeople() {
    this.dataservice.getPersons().subscribe(items => {
      this.shoppingList = items;
      console.log(items);
      console.log("data from data servise " + this.shoppingList[0].personName);
    });
  }
  addPeople(form) {
    let newPerson1: person = {
      personName: form.value.personName,
      phoneNumber: form.value.phoneNumber
    };
    this.dataservice.addPerson(newPerson1).subscribe(item => {
      console.log(item);
      this.getPeople();
    });
  }
  deletePerson(id) {
    this.dataservice.deletePerson(id).subscribe(data => {
      console.log(data);
      if (data.n == 1) {
        for (var i = 0; i < this.shoppingList.length; i++) {
          if (id == this.shoppingList[i]._id) {
            this.shoppingList.splice(i, 1);
          }
        }
      }
    });
  }

  editPerson(form1) {
    let newPerson: person = {
      _id: this.selectedItem._id,
      personName: form1.value.personName,
      phoneNumber: form1.value.phoneNumber
    };
    this.dataservice.updatePerson(newPerson).subscribe(result => {
      console.log("original item to be update with old values" + result);
      this.getPeople();
    });
    this.toggleForm = !this.toggleForm;
  }

  showform(item) {
    this.selectedItem = item;
    this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {
    this.getPeople();
  }
}
