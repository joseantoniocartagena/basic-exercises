/*Components*/
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuPageComponent } from "./components/menu-page/menu-page.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MissingNumberOnArrayComponent } from "./components/exercises/missing-number-on-array/missing-number-on-array.component";

/*Modules*/
import { AppRoutingModule } from "./app-routing.module";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RepeatingNumberComponent } from './components/exercises/repeating-number/repeating-number.component';
import { ReverseArrayComponent } from './components/exercises/reverse-array/reverse-array.component';
import { SwapVarsComponent } from './components/exercises/swap-vars/swap-vars.component';
import { CheckPalindromeComponent } from './components/exercises/check-palindrome/check-palindrome.component';
import { ReverseStringComponent } from './components/exercises/reverse-string/reverse-string.component';
import { CountConsonantsComponent } from './components/exercises/count-consonants/count-consonants.component';
import { AnswerQuestionsComponent } from './components/answer-questions/answer-questions.component';
import { StudentsStatementComponent } from './components/exercises/students-statement/students-statement.component';
import { DiceStatementComponent } from './components/exercises/dice-statement/dice-statement.component';
import { DominoesStatementComponent } from './components/exercises/dominoes-statement/dominoes-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuPageComponent,
    FooterComponent,
    MissingNumberOnArrayComponent,
    RepeatingNumberComponent,
    ReverseArrayComponent,
    SwapVarsComponent,
    CheckPalindromeComponent,
    ReverseStringComponent,
    CountConsonantsComponent,
    AnswerQuestionsComponent,
    StudentsStatementComponent,
    DiceStatementComponent,
    DominoesStatementComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
