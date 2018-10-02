import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  info = [ {name: 'E-mail', content: 'robertsmith@company.com' },
                        {name: 'Phone', content: '+1 256 243 84 56'},
                        {name: 'Viber', content: '+1 256 243 84 56'},
                        {name: 'Skype', content: 'robsmithcompany'},
                        {name: 'Adress', content: '24058, Belgium, Brussels, Liutte 27, BE'}];
  constructor() { }

  ngOnInit() {
  }

}
