import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';


@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseUrl = "http://localhost:8080/api/candidate";
  constructor(private http: HttpClient) { }

  getDataList(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(`${this.baseUrl}`);
  }

  createCandidate(candidate: Candidate): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidate);
  }

  getDataById(id: number): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.baseUrl}/${id}`);
  }

  updateCandidate(id: number, candidate: Candidate): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, candidate);
  }

  deleteCandidate(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
