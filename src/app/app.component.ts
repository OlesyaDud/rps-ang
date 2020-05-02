import { Component } from '@angular/core';
import { PlayService } from './services/play.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rps-ui';

  resultX: string;
  resultY: string;
  resultVisible = 'hidden';

  constructor(private service: PlayService) {}

  clickB(move: string) {
    this.resultVisible = 'visible';

    this.service.play(move).subscribe(resp =>{
      if(resp.winner === 'PLAYER1') {
        this.resultX = '-60px';
        this.resultY = '-115px';
      } else 
      if(resp.winner === 'PLAYER2') {
        this.resultX = '-535px';
        this.resultY = '-115px';
      } else
      if(resp.winner === 'TIE') {
        this.resultX = '-300px';
        this.resultY = '-380px';
      }
      
    });
  }

  viz() {
    return this.resultVisible;
  }
}
