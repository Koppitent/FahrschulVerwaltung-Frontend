import { Injectable } from '@angular/core';
import { Fahrlehrer } from '../interfaces/fahrlehrer.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FahrlehrerService {
  private apiUrl = 'http://localhost:8080/api/fahrlehrer';

  constructor(private http: HttpClient) {}

  getFahrlehrer(): Observable<Fahrlehrer[]> {
    return this.http.get<Fahrlehrer[]>(this.apiUrl);
  }

  createFahrlehrer(fahrschueler: Fahrlehrer): Observable<Fahrlehrer> {
    return this.http.post<Fahrlehrer>(this.apiUrl, fahrschueler);
  }

  deleteFahrlehrer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateFahrlehrer(fahrschueler: Fahrlehrer): Observable<Fahrlehrer> {
    return this.http.put<Fahrlehrer>(
      `${this.apiUrl}/${fahrschueler.id}`,
      fahrschueler
    );
  }
}
