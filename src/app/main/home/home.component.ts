import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { BaseInfo, Home, Profile, Skills } from 'src/app/model/profile.interface';
import { ProfileService } from "src/app/service/profile.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  public info?: BaseInfo;
  public home?: Home;
  public skills?: Skills;

  constructor(private profileService: ProfileService) {}
  ngOnInit() {
    this.profileService.getInfo().subscribe(info => this.info = info);
    this.profileService.getHome().subscribe(home => this.home = home);
    this.profileService.getSkills().subscribe(skills => this.skills = skills);
  }
}