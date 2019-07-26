import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavcomponentComponent } from './navcomponent/navcomponent.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { HttpClientModule } from '@angular/common/http';

import {
  GoogleApiModule, 
  GoogleApiService, 
  GoogleAuthService, 
  NgGapiClientConfig, 
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";
import { SearchResultsComponent } from './search-results/search-results.component';

let gapiClientConfig: NgGapiClientConfig = {
  client_id: "550708335080-c966tiuctvltqn8tf5qtet1ju2r5brpv.apps.googleusercontent.com",
  discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
  scope: [
    "https://www.googleapis.com/auth/youtube"
  ].join(" ")
};

@NgModule({
  declarations: [
    AppComponent,
    NavcomponentComponent,
    BodycomponentComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
