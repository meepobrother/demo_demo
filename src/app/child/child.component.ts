import { Component, OnInit } from "@angular/core";
import { UserListGQL } from "../magnus/basicApi/magnus.server-angular.v0.0.1";
@Component({
  selector: "app-child",
  template: `
    1111
  `,
  styles: []
})
export class ChildComponent implements OnInit {
  saveShow: boolean;
  username: "readonly" | "default" | "hidden";
  constructor(public apollo: UserListGQL) {
    console.log(apollo);
  }
  ngOnInit() {
    // this.apollo.watch().valueChanges.subscribe(res => console.log(res));
  }
}
