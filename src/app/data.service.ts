import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any = {};

  constructor() { }

  updateData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
