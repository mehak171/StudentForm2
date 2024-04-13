import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent {
  costOfService: number;
  serviceQuality: number;
  roundUpTip: boolean = false;

  constructor(private dataService: DataService, private router: Router) {}

  calculateTip() {
    const tip = this.costOfService * this.serviceQuality;
    const totalTip = this.roundUpTip ? Math.ceil(tip) : Math.round(tip * 100) / 100;
    const totalBill = this.costOfService + totalTip;

    this.dataService.updateData({
      costOfService: this.costOfService,
      serviceQuality: this.serviceQuality,
      roundUpTip: this.roundUpTip,
      tip: totalTip,
      totalBill: totalBill
    });

    this.router.navigate(['/output']);
  }
}
