import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>warning-alert works!</p>',
  styles: [`
    p{
      color: yellowgreen;
    }`
  ]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
