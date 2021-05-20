import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  @Input()
  experience: Experience;
}
