import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  title: string = 'Work experience';
  firstPlaceName: string = 'Junior Web Developer at Nike, OR';
  firstPlaceDate: string = 'Mar 2022 - Present';
  firstPlace: any[] = [
    'Led the development of a new responsive website for a major client, resulting in an increase in traffic by 25%.',
    'Developed 20+ custom WordPress plugins used on high-traffic websites.',
    'Built front-end web applications using AngularJS that were used by millions of users.',
    'Wrote code that was clean, well organized, and easy to maintain.',
    'Worked with a team of developers to improve site speed and performance by 15%.'
  ];
  secondPlaceName: string = 'Associate Web Developer at Google, OR';
  secondPlaceDate: string = 'Aug 2021 - Jan 2022';
  secondPlace: any[] = [
    'Led the development of a new website which achieved a 10% increase in web traffic.',
    'Implemented a responsive design which increased mobile traffic by 20%.',
    'Reduced server response time by 30% through caching and optimizing SQL queries.',
    'Developed an e-commerce platform that processed $1M in sales within the first month.',
    'Wrote custom scripts to automate various tasks, saving the company 500 hours/year.'
  ];
}
