import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/candidate';
import { CandidateService } from 'src/app/candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  candidates?: Candidate[];

  constructor(private candidateService: CandidateService, private router: Router) { }

  ngOnInit(): void {
    this.getDataList();
  }

  private getDataList() {
    this.candidateService.getDataList().subscribe(data => {
      console.log(data)
      this.candidates = data;
    })
  }

  // updateCandidate(id: any) {
  //   this.router.navigate(['update-candidate', id]);
  // }

  deleteCandidate(id: any) {
    this.candidateService.deleteCandidate(id).subscribe(data => {
      console.log(data);
      this.getDataList();
    })
  }

}
