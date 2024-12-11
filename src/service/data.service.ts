import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from 'src/models/observation.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getObservation(): Observable<Observation> {
    return this.http.get<Observation>(this.jsonUrl);
  }

  saveObservation(observation: Observation): Observable<void> {
    // For now, saving locally is not feasible in Angular. Use a backend API.
    console.warn('Save functionality requires backend API implementation.');
    return new Observable<void>();
  }
}
