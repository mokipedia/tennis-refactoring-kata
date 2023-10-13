import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  private readonly player1Name: string;
  private player1Score: number = 0;

  private readonly player2Name: string;
  private player2Score: number = 0;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let score: string;
    if (this.player1Score < 4 && this.player2Score < 4 && !(this.player1Score + this.player2Score === 6)) {
      const points: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      score = points[this.player1Score];
      return (this.player1Score === this.player2Score) ? score + '-All' : score + '-' + points[this.player2Score];
    } else {
      if (this.player1Score === this.player2Score)
        return 'Deuce';
      score = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
      return (((this.player1Score - this.player2Score) * (this.player1Score - this.player2Score)) === 1) ? 'Advantage ' + score : 'Win for ' + score;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
