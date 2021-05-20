import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfo } from 'src/app/interfaces/personal-info.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  @Input()
  personalInfo: PersonalInfo;
}
