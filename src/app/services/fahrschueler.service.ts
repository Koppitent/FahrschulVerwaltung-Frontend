import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fahrschueler } from '../interfaces/fahrschueler.interface';

@Injectable({
  providedIn: 'root',
})
export class FahrschuelerService {
  private apiUrl = 'http://localhost:8080/api/fahrschueler';

  constructor(private http: HttpClient) {}

  // Get all Fahrschueler
  getFahrschueler(): Observable<Fahrschueler[]> {
    return this.http.get<Fahrschueler[]>(this.apiUrl);
  }

  // Create a new Fahrschueler
  createFahrschueler(fahrschueler: Fahrschueler): Observable<Fahrschueler> {
    return this.http.post<Fahrschueler>(this.apiUrl, fahrschueler);
  }

	deleteFahrschueler(id: number): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}

}
