import { Component, OnInit } from "@angular/core";
import { person } from "../person";
import { DataService } from "../data.service";

@Component({
  selector: "app-person",
  templateUrl: "./person.component.html",
  styleUrls: ["./person.component.css"]
})
export class PersonComponent implements OnInit {
  pepolelist: person[] = [];
  selectedPerson: person;
  toggleForm: boolean;

  constructor(private dataservice: DataService) {}

  getPersons() {
    this.dataservice.getPersons().subscribe(persons => {
      this.pepolelist = persons;
      console.log("data from data service" + this.pepolelist[0].personName);
    });
  }
  addPerson(form) {
    let newPerson: person = {
      personName: form.value.personName,
      phoneNumber: form.value.phoneNumber
    };
    this.dataservice.addPerson(newPerson).subscribe(person => {
      console.log(person);
      this.getPersons();
    });
  }

  editPerson(form) {
    let newPerson: person = {
      _id: this.selectedPerson._id,
      personName: form.value.itemName,
      phoneNumber: form.value.phoneNumber
    };
    this.dataservice.updatePerson(newPerson).subscribe(result => {
      console.log("original person updated with old value" + result);
      this.getPersons();
    });
    this.toggleForm = !this.toggleForm;
  }
  deletePerson(id) {
    this.dataservice.deletePerson(id).subscribe(data => {
      console.log(data);
      if (data.n == 1) {
        for (var i = 0; i < this.pepolelist.length; i++) {
          if (id == this.pepolelist[i]._id) {
            this.pepolelist.splice(i, 1);
          }
        }
      }
    });
  }
  showEditForm(person) {
    this.selectedPerson = person;
    this.toggleForm = !this.toggleForm;
  }

  ngOnInit() {}
}
