import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { RouterModule,Routes } from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {
    path:"",component:ContactlistComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ContactlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
