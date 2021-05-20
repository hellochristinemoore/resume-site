import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from './interfaces/personal-info.interface';
import { PersonalInfoService } from './services/personal-info.service';
import { Experience } from './interfaces/experience.interface';
import { ExperienceService } from './services/experience.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'resume-site';
  personalInfo: PersonalInfo;
  experiences: Experience[]; //<== the plural variable name indicates multiple arrays

  //Dependency Inject PersonalInfoService & ExperienceService below
  constructor(
    private PersonalInfoService: PersonalInfoService,
    private ExperienceService: ExperienceService
  ) {}

  getPersonalInfoService(): void {
    this.personalInfo = this.PersonalInfoService.getPersonalInfo();
  }

  getExperienceService(): void {
    this.experiences = this.ExperienceService.getExperiences();
  }

  ngOnInit() {
    this.getPersonalInfoService();
    this.getExperienceService();
    //console.log(this.personalInfo); <== check if service output correctly
    //console.log(this.experiences);
  }
}
