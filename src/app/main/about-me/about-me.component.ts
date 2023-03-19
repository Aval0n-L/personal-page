import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public listOfInfo : any = [
    {
      hide: 'Little',
      title: 'Hobby',
      description: 'Some interesting story'
    },
    {
      hide: 'About',
      title: 'Life',
      description: 'Some interesting story'
    },
    {
      hide: 'Me',
      title: 'Interest',
      description: 'Some interesting story'
    }
  ]
}
