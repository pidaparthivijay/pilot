import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  data: any;
  typeOfChart = 'polarArea';
  typesOfChart: any[] = [
    { label: 'polarArea', value: 'polarArea' },
    { label: 'pie', value: 'pie' },
    { label: 'doughnut', value: 'doughnut' }];
  constructor() {
    this.data = {
      datasets: [{
        data: [
          80,
          40,
          60,
          40,
          40,
          80,
          40,
        ],
        backgroundColor: [
          "#123C69",
          "#800080",
          "#FFCE56",
          "#4F4A41",
          "#36A2EB",
          "#86C232",
          "#F13C20"
        ],
        label: 'My Skillset'
      }],
      labels: [
        "Java",
        "Angular",
        "JSP",
        "JavaScript",
        "Oracle",
        "Spring/Spring Boot/Spring JPA",
        "Hibernate",
      ]
    }
  }
  ngOnInit(): void {
  }
}