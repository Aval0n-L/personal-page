import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public level : number = 0;
  public experience : number = 0;
  public expNow : string = "";
  public expNeed : string = "";

  private birthYear = 1995;
  private birthMonth = 8;
  private birthDay = 1;

  ngOnInit() {
    let currentDate = new Date();
    this.level = currentDate.getUTCFullYear() - this.birthYear;

    let currentMonth = currentDate.getUTCMonth() + 1; // JS return months from 0 to 11
    let isBeforeBirthMonth = currentMonth < this.birthMonth 
    let isBeforeBirthDayInMonth = (currentMonth === this.birthMonth && currentDate.getUTCDate() < this.birthDay);

    if (isBeforeBirthMonth || isBeforeBirthDayInMonth) {
      this.level--;
    }

    let startOfYear = new Date(currentDate.getUTCFullYear(), 0, 1);
    let endOfYear = new Date(currentDate.getUTCFullYear(), 11, 31);

    let differenceNow = (currentDate.getTime() - startOfYear.getTime()) / (1000 * 3600 * 24);
    this.expNow = differenceNow.toFixed();

    let differenceNeed = (endOfYear.getTime() - startOfYear.getTime()) / (1000 * 3600 * 24);
    this.expNeed = differenceNeed.toFixed();

    this.experience = (differenceNow * 100) / differenceNeed;
  }  
}
