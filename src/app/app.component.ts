import { Component, OnInit } from "@angular/core";
import { LoginGQL } from "./magnus/addonBasic/magnus.server-angular.v0.0.1";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  saveShow: boolean;
  username: "readonly" | "default" | "hidden";
  constructor(public apollo: LoginGQL) {}
  ngOnInit() {
    this.apollo.watch().valueChanges.subscribe(res => console.log(res));
  }
}
