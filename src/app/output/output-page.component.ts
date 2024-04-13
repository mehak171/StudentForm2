import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.scss']
})
export class OutputPageComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getData();
  }
}
