import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { PlayService } from './services/play.service';
import { Result } from './models/result';
import { of } from 'rxjs';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let service: PlayService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatButtonModule
      ],
      providers: [
        PlayService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PlayService);
  });

  it('should create the app', () => { 
    expect(component).toBeTruthy();
  });

  it(`should have as title 'rps-ui'`, () => {
    expect(component.title).toEqual('rps-ui');
  });

  it('clickB - should take in ROCK and show Win', () => {
    // arange
    const choice = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'SCISSORS',
      winner: 'PLAYER1'
    };
    const spy = spyOn(service, 'play').and.returnValue(of<Result>(result));

    // act
    component.clickB(choice);

    // assert
    expect(spy).toHaveBeenCalledWith(choice);
    expect(component.resultVisible).toEqual('visible');
    expect(component.resultX).toEqual('-60px');
    expect(component.resultY).toEqual('-115px');

  });

  it('clickB - should take in ROCK and show Los', () => {
    // arange
    const choice = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'PAPER',
      winner: 'PLAYER2'
    };
    const spy = spyOn(service, 'play').and.returnValue(of<Result>(result));

    // act
    component.clickB(choice);

    // assert
    expect(spy).toHaveBeenCalledWith(choice);
    expect(component.resultVisible).toEqual('visible');
    expect(component.resultX).toEqual('-535px');
    expect(component.resultY).toEqual('-115px');

  });

  it('clickB - should take in ROCK and show Tie', () => {
    // arange
    const choice = 'ROCK';
    const result: Result = {
      player1: 'ROCK',
      player2: 'ROCK',
      winner: 'TIE'
    };
    const spy = spyOn(service, 'play').and.returnValue(of<Result>(result));

    // act
    component.clickB(choice);

    // assert
    expect(spy).toHaveBeenCalledWith(choice);
    expect(component.resultVisible).toEqual('visible');
    expect(component.resultX).toEqual('-300px');
    expect(component.resultY).toEqual('-380px');

  });
});
