import { Component } from "@angular/core";

@Component({
  selector: "app-reverse-array",
  templateUrl: "./reverse-array.component.html",
  styleUrls: ["./reverse-array.component.css"]
})
export class ReverseArrayComponent {
  private numbers = [];
  private length;
  private reverse;
  generate() {
    this.numbers = [];
    for (let i = this.length - 1; i >= 0; --i)
      this.numbers[i] = Math.floor(Math.random() * this.length);
    this.reverseArray();
  }
  reverseArray() {
    let top = this.numbers.length - 1,
      bottom = 0;
    this.reverse = [];
    while (this.numbers.length > bottom) {
      this.reverse[bottom] = this.numbers[top];
      top--;
      bottom++;
    }
  }
}
