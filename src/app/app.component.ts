import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: string = 'assets/photo-resume.jpeg';
  fullName: string = 'Leslieann Embretson';
  profession: string = 'Front-end web developer';
  email: string = 'leslieann.embretson@gmail.com';
  phone: string = '(642) 227-0276';
  location: string = 'Eugene, OR';
  contactsTitle: string = 'Contacts';
  contactsList: any[] = [
    {name: 'GitHub', link: 'http://github.com/leslieannE'},
    {name: 'LinkedIn', link: 'http://linkedin.com/in/leslieann-E'}
  ];
}
