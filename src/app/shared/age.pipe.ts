import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'age' })
export class AgePipe implements PipeTransform {

  transform(birtday: string): number {
    return this.calculateAge(birtday);
  }

  calculateAge(birthday: string): number {
    let age;
    const date = new Date(birthday);
    const today = new Date();

    age = (today.getTime() - date.getTime()) / 1000;
    age /= (60 * 60 * 24);
    age = Math.abs(Math.round(age / 365.25));

    return age;
  }
}
