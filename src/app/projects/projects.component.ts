import { Component, OnInit } from "@angular/core";
import { Constants } from "../shared/constants";
import { SharedService } from "../shared/shared.service";
import * as Chart from "chart.js";
@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projectCanvas: any;
  projectContext: any;
  data;
  projects: any[] = [];
  constructor(private sharedService: SharedService) {
    this.data = Constants.projectData;
  }
  radarOptions = {
    title: {
      display: true,
      title: "Tech Stack Coverage",
      text: "Tech Stack Coverage",
    },

    scale: {
      angleLines: {
        lineWidth: 2,
      },
      pointLabels: {
        fontSize: 20,
        fontColor: "#000000",
      },
    },
    responsive: true,
    legend: {
      position: "left",
      labels: {
        fontColor: "#000000",
      },
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };
  ngOnInit(): void {
    this.getProjectData();
    this.projectCanvas = document.getElementById("projectChart");
    this.projectContext = this.projectCanvas.getContext("2d");
    let projectChart = new Chart(this.projectContext, {
      type: "radar",
      data: Constants.projectData,
      options: this.radarOptions,
    });
  }
  getProjectData() {
    this.sharedService.getProjectData().then((data) => (this.projects = data));
  }

  drawChart(dataSetName: string) {
    if (dataSetName == "cbData") {
      this.data = Constants.cBdata;
    } else if (dataSetName == "ccrData") {
      this.data = Constants.ccrData;
    } else if (dataSetName == "selfServiceData") {
      this.data = Constants.selfServiceData;
    } else if (dataSetName == "hotelTourServicesData") {
      this.data = Constants.hotelTourServicesData;
    } else if (dataSetName == "portFolioData") {
      this.data = Constants.portFolioData;
    }
  }
}
