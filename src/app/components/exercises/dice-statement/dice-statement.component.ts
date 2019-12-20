import { Component } from "@angular/core";

@Component({
  selector: "app-dice-statement",
  templateUrl: "./dice-statement.component.html",
  styleUrls: ["./dice-statement.component.css"]
})
export class DiceStatementComponent {
  private length;
  private dice;
  private sum;
  submit() {
    this.dice = [[], []];
    this.sum = 0;
    for (let i = this.length - 1; i >= 0; --i) {
      this.dice[0][i] = Math.floor(Math.random() * 6 + 1);
      this.dice[1][i] = Math.floor(Math.random() * 6 + 1);
      if (this.dice[0][i] + this.dice[1][i] == 10) this.sum++;
    }
  }
}
