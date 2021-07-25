
import { Candidate } from 'src/app/candidate';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidateService } from 'src/app/candidate.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  id?: any;
  candidate: Candidate = new Candidate();
  constructor(private candidateService: CandidateService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.candidateService.getDataById(this.id).subscribe(data => {
      this.candidate = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.candidateService.updateCandidate(this.id, this.candidate).subscribe(data => {
      this.goToList();
    }, error => console.log(error));
  }

  goToList() {
    this.router.navigate(['/employees']);
  }
}
