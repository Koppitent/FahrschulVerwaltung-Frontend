import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fahrschueler } from '../interfaces/fahrschueler.interface';
import { Praxisstunde } from '../interfaces/praxisstunde.class';

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

	postPraxisstunde(praxisstunde: Praxisstunde): Observable<Praxisstunde> {
		return this.http.post<Praxisstunde>(this.apiUrl, praxisstunde);
	}

}
