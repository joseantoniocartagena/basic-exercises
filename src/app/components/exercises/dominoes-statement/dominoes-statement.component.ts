import { Component } from "@angular/core";

@Component({
  selector: "app-dominoes-statement",
  templateUrl: "./dominoes-statement.component.html",
  styleUrls: ["./dominoes-statement.component.css"]
})
export class DominoesStatementComponent {
  private dominoes;
  generate() {
    let top = 28,
      current = 0,
      tmp;
    this.dominoes = [];
    for (let i = 27; i >= 0; --i) this.dominoes[i] = i;
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = this.dominoes[current];
      this.dominoes[current] = this.dominoes[top];
      this.dominoes[top] = tmp;
    }
    console.log(this.dominoes);
  }
}
