import { Component, OnInit } from '@angular/core';
import { rowExpansionAnimations } from '../shared/animations';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    rowExpansionAnimations
  ]
})
export class EducationComponent implements OnInit {
  schools: any[] = [];
  constructor(private sharedService: SharedService) { }
  ngOnInit(): void {
    this.getSchoolData();

  }
  getSchoolData() {
    this.sharedService.getProductsWithOrdersSmall().then(data => this.schools = data);
  }
}