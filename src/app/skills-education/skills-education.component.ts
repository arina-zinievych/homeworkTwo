import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-education',
  templateUrl: './skills-education.component.html',
  styleUrls: ['./skills-education.component.css']
})
export class SkillsEducationComponent {
  educationTitle: string = 'Education';
  universityName: string = 'Bachelor of Associate\'s Degree in Web Design and Development at Oregon State University, OR';
  educationDate: string = 'Sep 2017 - May 2021';
  skillsTitle: string = 'Skills';
  skillsList: any[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'ReactJS',
    'Node.js',
    'ExpressJS'
  ];
  certificationsTitle: string = 'Certifications';
  certificationsList: any[] = [
    'loPP membership - 2021',
    'Certified Packaging Professional(CPP) - 2020'
  ];
}
