import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../models/result';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(private http: HttpClient) { }

  play(choice: string):Observable<Result> {
    return this.http.get<Result>(environment.baseUrl + '/play?choice='+ choice);
  }
}
