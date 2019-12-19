import { Component } from "@angular/core";

@Component({
  selector: "app-check-palindrome",
  templateUrl: "./check-palindrome.component.html",
  styleUrls: ["./check-palindrome.component.css"]
})
export class CheckPalindromeComponent {
  private word;
  private palindrome;
  submit() {
    let top = this.word.length - 1,
      bottom = 0;
    this.word = this.word.toUpperCase();
    this.palindrome = true;
    console.log(top);
    console.log(bottom);
    while (top > bottom) {
      if (!(this.word[top] == this.word[bottom])) {
        this.palindrome = false;
      }
      top--;
      bottom++;
    }
  }
}
