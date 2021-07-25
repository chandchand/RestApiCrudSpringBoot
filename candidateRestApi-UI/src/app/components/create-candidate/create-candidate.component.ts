import { Candidate } from './../../candidate';
import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/candidate.service';
// import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  candidate: Candidate = new Candidate();
  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
  }

  saveCandidate() {
    this.candidateService.createCandidate(this.candidate).subscribe(data => {
      console.log(data);
      this.goToList();
    }, error => console.log(error));
  }

  goToList() {
    this.router.navigate(['/candidates']);
  }

  onSubmit() {
    console.log(this.candidate);
    this.saveCandidate();
  }


}
