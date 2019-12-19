import { Component } from "@angular/core";

@Component({
  selector: "app-missing-number-on-array",
  templateUrl: "./missing-number-on-array.component.html",
  styleUrls: ["./missing-number-on-array.component.css"]
})
export class MissingNumberOnArrayComponent {
  private numbers;
  private length;
  private number;
  generate() {
    let tmp,
      current,
      top = this.length;
    this.numbers = [];
    for (let i = this.length - 1; i >= 0; --i) {
      this.numbers[i] = i + 1;
    }
    if (top)
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = this.numbers[current];
        this.numbers[current] = this.numbers[top];
        this.numbers[top] = tmp;
      }
    this.numbers.splice(Math.floor(Math.random() * this.length), 1);
    this.findMissingNumber();
  }
  findMissingNumber() {
    let no = (this.length * (this.length + 1)) / 2;
    for (let i = this.numbers.length - 1; i >= 0; --i) {
      no -= this.numbers[i];
    }
    this.number = no;
  }
}
