import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Praxisstunde } from '../interfaces/praxisstunde.interface';
import { Fahrschueler } from '../interfaces/fahrschueler.interface';

@Injectable({
  providedIn: 'root',
})
export class PraxisstundenService {
  private apiUrl = 'http://localhost:8080/api/praxisstunden';

  constructor(private http: HttpClient) {}

  getPraxisstunde(id: number): Observable<Praxisstunde> {
    return this.http.get<Praxisstunde>(this.apiUrl);
  }

	getPraxisstundenFahrschueler(fahrschuelerId: number): Observable<Praxisstunde[]> {
		return this.http.get<Praxisstunde[]>(this.apiUrl + '/fahrschueler/'+fahrschuelerId);
	}

}
