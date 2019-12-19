import { Component } from "@angular/core";

@Component({
  selector: "app-repeating-number",
  templateUrl: "./repeating-number.component.html",
  styleUrls: ["./repeating-number.component.css"]
})
export class RepeatingNumberComponent {
  private numbers;
  private length;
  private number;
  generate() {
    this.numbers = [];
    for (let i = this.length - 1; i >= 0; --i)
      this.numbers[i] = Math.floor(Math.random() * this.length);
    this.findRepeatingNumber();
  }
  findRepeatingNumber() {
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = 0; j < this.numbers.length; j++) {
        if (this.numbers[i] == this.numbers[j]) {
          this.number = this.numbers[i];
          break;
        }
      }
    }
  }
}
