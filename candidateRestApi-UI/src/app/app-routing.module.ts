
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CreateCandidateComponent } from './components/create-candidate/create-candidate.component';
import { UpdateCandidateComponent } from './components/update-candidate/update-candidate.component';

const routes: Routes = [
  { path: 'candidates', component: CandidateComponent },
  { path: '', redirectTo: 'canditates', pathMatch: 'full' },
  { path: 'add-candidates', component: CreateCandidateComponent },
  { path: 'update-candidate/:id', component: UpdateCandidateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
