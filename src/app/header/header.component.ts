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
  private birthDate = new Date(this.birthYear, this.birthMonth, this.birthDay);

  ngOnInit() {
    let currentDate = new Date();
    this.level = currentDate.getUTCFullYear() - this.birthYear;

    if(currentDate.getUTCMonth() < this.birthMonth) {
      this.level--;
    }

    let differenceNow = (currentDate.getTime() - this.birthDate.getTime()) / (1000 * 3600 * 24);
    this.experience = differenceNow;
    this.expNow = differenceNow.toFixed();
    

    let nextBirthDay = new Date(currentDate.getUTCFullYear(),this.birthMonth,this.birthDay);
    let differenceNeed = (nextBirthDay.getTime() - this.birthDate.getTime())  / (1000 * 3600 * 24);
    this.expNeed = differenceNeed.toFixed();
    
    this.experience = (differenceNow  * 100 ) / differenceNeed;
  }
  
}
