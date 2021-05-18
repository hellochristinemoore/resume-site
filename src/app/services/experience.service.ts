import { Injectable } from '@angular/core';
import { experienceRecord } from '../database/experience';
import { Experience } from '../interfaces/experience.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  getExperiences(): Experience[] {
    return experienceRecord;
  }
}
