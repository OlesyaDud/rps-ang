import { TestBed } from '@angular/core/testing';

import { PlayService } from './play.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Result } from '../models/result';
import { environment } from 'src/environments/environment';

describe('PlayService', () => {
  let service: PlayService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayService]
    });

    service = TestBed.inject(PlayService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call play with rock and wins', () => {
    const p = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'PAPER',
      winner: 'PLAYER1'
    };
    service.play(p).subscribe(resp => {
      expect(resp.winner).toEqual('PLAYER1');
    });
    const req = httpMock.expectOne(environment.baseUrl + '/play?choice='+ p);
    expect(req.request.method).toEqual('GET');
    req.flush(result);
  });

  it('should call play with rock and loses', () => {
    const p = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'SCISSORS',
      winner: 'PLAYER2'
    };
    service.play(p).subscribe(resp => {
      expect(resp.winner).toEqual('PLAYER2');
    });
    const req = httpMock.expectOne(environment.baseUrl + '/play?choice='+ p);
    expect(req.request.method).toEqual('GET');
    req.flush(result);
  });

  it('should call play with rock and ties', () => {
    const p = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'ROCK',
      winner: 'TIE'
    };
    service.play(p).subscribe(resp => {
      expect(resp.winner).toEqual('TIE');
    });
    const req = httpMock.expectOne(environment.baseUrl + '/play?choice='+ p);
    expect(req.request.method).toEqual('GET');
    req.flush(result);
  });

});
