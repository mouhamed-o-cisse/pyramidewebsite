import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  cash: string;
  designation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    designation: ' Frais d\'inscription ', cash: '20 000F CFA'
  },
  {
    designation: ' Scolarité Octobre ', cash: '20 000F CFA'
  },
  {
    designation: ' APE ', cash: '1 000F CFA'
  },
  {
    designation: ' Total ', cash: '41 000F CFA'
  }
];

const ELEMENT_DATA_2: PeriodicElement[] = [
  {
    designation: ' Frais d\'inscription ', cash: '20 000F CFA'
  },
  {
    designation: '  Scolarité Octobre ', cash: '15 000F CFA'
  },
  {
    designation: ' APE ', cash: '1 000F CFA'
  },
  {
    designation: ' Total ', cash: '36 000F CFA'
  }
];

const ELEMENT_DATA_3: PeriodicElement[] = [
  {
    designation: ' Frais généraux ', cash: '25 000F CFA'
  },
  {
    designation: '  Scolarité Octobre ', cash: '17 000F CFA'
  },
  {
    designation: ' APE ', cash: '1 000F CFA'
  },
  {
    designation: ' Total ', cash: '43 000F CFA'
  }
];

const ELEMENT_DATA_4: PeriodicElement[] = [
  {
    designation: ' Frais d\'inscription ', cash: '25 000F CFA'
  },
  {
    designation: '  Scolarité Octobre ', cash: '18 000F CFA'
  },
  {
    designation: ' APE ', cash: '1 000F CFA'
  },
  {
    designation: ' Total ', cash: '44 000F CFA'
  }
];

const ELEMENT_DATA_5: PeriodicElement[] = [
  {
    designation: ' Frais généraux ', cash: '25 000F CFA'
  },
  {
    designation: '  Scolarité Octobre ', cash: '22 000F CFA'
  },
  {
    designation: ' APE ', cash: '1 000F CFA'
  },
  {
    designation: ' Total ', cash: '48 000F CFA'
  }
];


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-tarifs',
  templateUrl: './tarifs.component.html',
  styleUrls: ['./tarifs.component.scss']
})
export class TarifsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  dataSource2 = ELEMENT_DATA_2;
  dataSource3 = ELEMENT_DATA_3;
  dataSource4 = ELEMENT_DATA_4;
  dataSource5 = ELEMENT_DATA_5;
}
