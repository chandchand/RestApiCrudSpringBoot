import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { FormsModule } from '@angular/forms';
import { UpdateCandidateComponent } from './components/update-candidate/update-candidate.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidateComponent,
    CreateCandidateComponent,
    UpdateCandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
