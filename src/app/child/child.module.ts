import { BrowserModule } from "@angular/platform-browser";
import { NgModule, InjectionToken } from "@angular/core";
import { ApolloModule, Apollo } from "apollo-angular";
import { ChildComponent } from "./child.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpLinkModule } from "apollo-angular-link-http";
import { MagnusAngular, MAGNUS_APOLLO_NAME } from "@magnus-plugins/angular";
import { apiConfig } from "../magnus/basicApi/api-url.v0.0.1";
import { UserListGQL } from "../magnus/basicApi/magnus.server-angular.v0.0.1";

@NgModule({
  declarations: [ChildComponent],
  exports: [ChildComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    MagnusAngular.forChild({ ...apiConfig, links: [] })
  ],
  providers: [
    UserListGQL,
    {
      provide: MAGNUS_APOLLO_NAME,
      useValue: apiConfig.name
    }
  ]
})
export class ChildModule {}
