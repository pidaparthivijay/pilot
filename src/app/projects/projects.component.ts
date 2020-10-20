import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data;
  projects: any[] = [];

  constructor(private sharedService: SharedService) {
    this.data = {
      labels: ["Java", "Spring", "Spring Boot", "Spring JPA", "Hibernate", "Oracle", "JSP", "JavaScript,TypeScript,jQuery", "CSS", "Angular"],
      datasets: [
        {
          label: 'Cherry Brown Services',
          // "#",
          // "#",
          // "#",
          // "#",
          // "#36A2EB",
          // "#",
          // "#F13C20"

          borderColor: '#800080',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [35, 0, 0, 0, 0, 20, 30, 15, 0, 0]

        },
        {
          label: 'Citi Connectivity Registry',
          fontColor: '#000000',
          borderColor: '#FFCE56',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [22, 20, 0, 0, 10, 10, 18, 15, 5, 0]

        },
        {
          label: 'CCR Self Service',
          borderColor: '#123C69',
          fontColor: '#000000',
          pointBackgroundColor: 'rgba(55,79,32,1.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [25, 0, 25, 12, 0, 0, 0, 0, 8, 30]
        },
        {
          label: 'Hotel & Tour Services',
          borderColor: '#4F4A41',
          fontColor: '#000000',
          pointBackgroundColor: 'rgba(55,79,32,1.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [20, 0, 25, 15, 0, 0, 0, 0, 15, 25]
        },
        {
          label: 'Portfolio',
          borderColor: '#86C232',
          fontColor: '#000000',
          pointBackgroundColor: 'rgba(55,79,32,1.5)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [0, 0, 0, 0, 0, 0, 0, 15, 30, 55]
        }
      ]
    };
  }
  radarOptions = {

    title: {
      display: true,
      title: 'Tech Stack Coverage',
      text: 'Tech Stack Coverage'
    },

    scale: {
      angleLines: {
        lineWidth: 2
      },
      pointLabels: {
        fontSize: 20,
        fontColor: '#000000'
      },

    },
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontColor: '#000000'
      }
    },
    animation: {
      animateScale: true,
      animateRotate: true
    },

  };
  ngOnInit(): void {
    this.getProjectData();

  }
  getProjectData() {
    this.sharedService.getProjectData().then(data => this.projects = data);
  }


}
