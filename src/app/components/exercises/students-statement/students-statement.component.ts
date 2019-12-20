import { Component } from "@angular/core";

@Component({
  selector: "app-students-statement",
  templateUrl: "./students-statement.component.html",
  styleUrls: ["./students-statement.component.css"]
})
export class StudentsStatementComponent {
  private length;
  private students = [];
  private avg;
  private low;
  private high;
  private apr;
  submit() {
    const hGrade = 5;
    this.students = [];
    for (let i = this.length - 1; i >= 0; --i)
      this.students[i] = Math.floor(Math.random() * hGrade);
    this.average();
    this.highest();
    this.lowest();
    this.approved();
  }
  average() {
    let sum = this.students.reduce((a, b) => a + b, 0);
    this.avg = sum / this.students.length;
  }
  highest() {
    this.high = Math.max(...this.students);
  }
  lowest() {
    this.low = Math.min(...this.students);
  }
  approved() {
    this.apr = 0;
    for (let i = this.length - 1; i >= 0; --i)
      if (this.students[i] >= 3.0) this.apr++;
  }
}
