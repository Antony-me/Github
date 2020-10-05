import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { SearchComponent } from './search/search.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SearchComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  
  providers: [ProfileService],
  bootstrap: [AppComponent]
})  
export class AppModule { }
