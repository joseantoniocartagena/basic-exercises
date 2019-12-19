import { Component } from "@angular/core";

@Component({
  selector: "app-reverse-string",
  templateUrl: "./reverse-string.component.html",
  styleUrls: ["./reverse-string.component.css"]
})
export class ReverseStringComponent {
  private word;
  private reverse;
  submit() {
    this.reverse = "";
    this.reverseWord(this.word.length - 1);
  }
  reverseWord(top) {
    if (this.word.length == this.reverse.length) return;
    this.reverse += this.word[top];
    this.reverseWord(top - 1);
  }
}
