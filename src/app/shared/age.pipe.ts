import { Pipe, PipeTransform } from '@angular/core';
import { ProfileService } from '../core/profile.service';
import { AgeComponent } from '../shared/age/age.component';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {
  transform(info: string): string {
    const age = 'oi';
    /*  if (e.name === 'brithday') {
        const user = e.value;
        calculateAge(user.day, e.month, e.year);
      } */
    console.log('oi');
    return 'oi';
  }

  calculateAge(userDay: number, userMonth: number, userYear: number) {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    let age;

    if (userMonth - currentMonth < 0) {
      age = currentYear - userYear - 1;
    } else {
      if (userDay - currentDay < 0) {
        age = currentYear - userYear - 1;
      } else {
        age = currentYear - userYear;
      }
    }
    return age;
  }
}
