import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professional-skills',
  templateUrl: './professional-skills.component.html',
  styleUrls: ['./professional-skills.component.scss']
})
export class ProfessionalSkillsComponent implements OnInit {
  titleSkills = [ {name: 'WordPress', percentage: '80' },
                        {name: 'HTML & CSS', percentage: '89'},
                        {name: 'JavaScript', percentage: '52'},
                        {name: 'PHP & MySQL', percentage: '99'},
                        {name: 'Drupal', percentage: '61'},
                        {name: 'Photoshop', percentage: '97'},
                        {name: 'Photoshop', percentage: '97'}];

  constructor() { }

  ngOnInit() {
  }

}
