import { NgModule } from "@angular/core";
import { MenuPageComponent } from "./components/menu-page/menu-page.component";
import { MissingNumberOnArrayComponent } from "./components/exercises/missing-number-on-array/missing-number-on-array.component";
import { RepeatingNumberComponent } from "./components/exercises/repeating-number/repeating-number.component";
import { ReverseArrayComponent } from "./components/exercises/reverse-array/reverse-array.component";
import { SwapVarsComponent } from "./components/exercises/swap-vars/swap-vars.component";
import { CheckPalindromeComponent } from "./components/exercises/check-palindrome/check-palindrome.component";
import { ReverseStringComponent } from "./components/exercises/reverse-string/reverse-string.component";
import { CountConsonantsComponent } from "./components/exercises/count-consonants/count-consonants.component";
import { AnswerQuestionsComponent } from "./components/answer-questions/answer-questions.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: MenuPageComponent },
  { path: "missingnumberonarray", component: MissingNumberOnArrayComponent },
  { path: "reversearray", component: ReverseArrayComponent },
  { path: "repeatinggnumberonarray", component: RepeatingNumberComponent },
  { path: "swapvars", component: SwapVarsComponent },
  { path: "checkpalindrome", component: CheckPalindromeComponent },
  { path: "reversestring", component: ReverseStringComponent },
  { path: "countconsonants", component: CountConsonantsComponent },
  { path: "answerquestions", component: AnswerQuestionsComponent },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
