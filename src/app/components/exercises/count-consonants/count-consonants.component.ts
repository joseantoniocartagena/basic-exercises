import { Component } from "@angular/core";

@Component({
  selector: "app-count-consonants",
  templateUrl: "./count-consonants.component.html",
  styleUrls: ["./count-consonants.component.css"]
})
export class CountConsonantsComponent {
  private consonantsNum;
  private consonatsRegExp = /[bcdfghjklmnpqrstvwxys]/gi;
  private word;
  submit() {
    this.consonantsNum = this.word.match(this.consonatsRegExp)
      ? this.word.match(this.consonatsRegExp).length
      : undefined;
  }
}
