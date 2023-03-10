import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {  
  public year : number = 0;
  constructor() {
  }
  ngOnInit(): void {
    let data = new Date();
    this.year = data.getUTCFullYear();
  }
}
