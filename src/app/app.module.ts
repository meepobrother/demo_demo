import { BrowserModule } from "@angular/platform-browser";
import { NgModule, InjectionToken } from "@angular/core";
import { ApolloModule, Apollo } from "apollo-angular";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpLinkModule } from "apollo-angular-link-http";
import { MagnusAngular } from "@magnus-plugins/angular";
import { apiConfig } from "./magnus/addonBasic/api-url.v0.0.1";
import { ChildModule } from "./child/child.module";
import { LoginGQL } from "./magnus/addonBasic/magnus.server-angular.v0.0.1";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ApolloModule,
    HttpLinkModule,
    HttpClientModule,
    MagnusAngular.forChild({ ...apiConfig, links: [] }),
    ChildModule
  ],
  providers: [LoginGQL],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
