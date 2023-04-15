import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WineGeneratorService {

  private readonly httpClient = inject(HttpClient);

  public getWines(prompt: string, numberOfWines: number): Observable<string[]> {
    return this.httpClient.get<string[]>(`http://localhost:3000/api/wines?prompt=${prompt}&n=${numberOfWines}`);
  }
}
