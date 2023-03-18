import { Component, Input } from '@angular/core';
import { School } from '../school.model';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent {
  @Input() school! : School;
}
