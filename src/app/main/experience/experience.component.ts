import { Component, Directive, EventEmitter, Input, Output } from '@angular/core';
import { Job } from './job.model';
import { School } from './school.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  public schools : Array<School> =
  [
    { 
      id: 1,
      name : "Belarusian State University", 
      picture : "",
      alt: "BSU",
      years: "2012 - 2017", 
      degree: "Bachelor's degree" 
    },
    {
      id: 2,
      name : "IT Academy", 
      picture: "",
      alt: "IT",
      years: "2016", 
      degree: "C# Developer - ASP.NET Developer"       
    },
    {      
      id: 3, 
      name : "BELHARD", 
      picture: "",
      alt: "BELHARD",
      years: "2015 - 2016", 
      degree: "Spoken English Language (B1)" 
    }
  ]
  
  public jobs : Array<Job> = 
  [
    {
      id: 1,
      name: "SEI «Gymnasium-College of Arts named after I.O.Akhremchik»",
      picture: "",
      alt: "SEI",
      years: "2017 - 2019",
      location: "Minsk, Belarus",
      skills: ""
    },
    {
      id: 2,
      name: "IHS Markit",
      picture: "",
      alt: "IHS",
      years: "",
      location: "",
      skills: ""
    },
    {
      id: 3,
      name: "IHS Markit a part of S&P Global",
      picture: "",
      alt: "SP",
      years: "",
      location: "",
      skills: ""
    },
    {
      id: 4,
      name: "In Progress...",
      picture: "",
      alt: "",
      years: "",
      location: "",
      skills: ""
    }
  ]


  public selected : any;
  public getValue(value: any, drawer: any) {
    this.selected = value;
    drawer.open();
  }
}
