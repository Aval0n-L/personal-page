import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  public tab: number = 1;

  public isBack(): boolean {
    return this.tab === 1;
  }
  public isFront(): boolean {
    return this.tab === 2;
  }
  public isPersonal(): boolean {
    return this.tab === 3;
  }
}
