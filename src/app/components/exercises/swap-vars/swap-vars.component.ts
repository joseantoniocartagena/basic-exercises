import { Component } from "@angular/core";

@Component({
  selector: "app-swap-vars",
  templateUrl: "./swap-vars.component.html",
  styleUrls: ["./swap-vars.component.css"]
})
export class SwapVarsComponent {
  private var1;
  private var2;

  submit() {
    this.var1 = this.var1 + this.var2;
    this.var2 = this.var1 - this.var2;
    this.var1 = this.var1 - this.var2;
  }
}
