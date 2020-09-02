import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  getProfessionalExperienceInYears(): string {
    const date1:Date = new Date('07/25/2014');
    const date2:Date = new Date();
    const diffTime = Math.abs(date1.getTime() - date2.getTime());
    const diffDays = diffTime / (1000 * 60 * 60 * 24 * 365); 
    return diffDays.toFixed(2);
  }

  getGreetingWithContext(): string {
    const hours:number = (new Date()).getHours();
    if(hours >= 5 && hours < 12) return 'Good Morning';
    if(hours >= 12 && hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  }
}
