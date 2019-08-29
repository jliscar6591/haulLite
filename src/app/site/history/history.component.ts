import { Component, OnInit } from '@angular/core';

export interface job     {
  name: string,
  currentDistance: string,
  weight: number,
  description: string,
  pay: number

}

export interface bid {
  name: string,
  bidNotes: string,
  bidPrice: number,
  expectedStartDate: string,
  expectedEndDate: string,
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  public jobsList: job[];
  public bidsList: bid[];

  constructor() { }

  ngOnInit() {
    this.jobsList = [
      {
        name: 'Chandlee and Sons Construction Comp LLC',
        currentDistance: '25.6mi',
        weight: 1500,
        description: 'Removing debris from jobsite after home demolition.',
        pay: 1375
      },
      {
        name: 'Ginger Ragsdale',
        currentDistance: '31.7mi',
        weight: 3000,
        description: 'Transport of two large gears, pre wrapped and palleted.',
        pay: 1890
      },
      {
        name: 'Suwanee Welding & Fabrication',
        currentDistance: '17.9mi',
        weight: 4300,
        description: 'Load and transport of large metal build frame pieces. Total of eight pieces.',
        pay: 1375
      },
      {
        name: 'Bubba and Bros Loggin',
        currentDistance: '22.5',
        weight: 6000,
        description: 'Load and haul of 25-45ft oak trees, de-limbed.',
        pay: 1375
      }

    ];

    this.bidsList = [
      {
        name: 'Chandlee and Sons Construction Comp LLC',
        bidNotes: 'All necessary equipment already owned',
        bidPrice: 1280,
        expectedStartDate: '1/12/2020',
        expectedEndDate: '1/15/2020',
      },
      {
        name: 'Ginger Ragsdale',
        bidNotes: 'Truck with forklift available',
        bidPrice: 2000,
        expectedStartDate: '11/16/2019',
        expectedEndDate: '11/16/2019',
      },
      {
        name: 'Suwanee Welding & Fabrication',
        bidNotes: '12 wheel flat bed available for transport',
        bidPrice: 4500,
        expectedStartDate: '12/14/2019',
        expectedEndDate: '12/14/2019',
      }
    ]
  }

  public edit(i){
    
  }

}
