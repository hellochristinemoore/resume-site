import { Injectable } from '@angular/core';
import { personalInfoRecord } from '../database/personal-info';
import { PersonalInfo } from '../interfaces/personal-info.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoService {
  getPersonalInfo(): PersonalInfo {
    return personalInfoRecord;
  }
}
