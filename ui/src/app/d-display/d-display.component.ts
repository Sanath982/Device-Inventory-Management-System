import { Component, OnInit } from '@angular/core';
import { DDisplayService } from './d-display.service';
@Component({
  selector: 'app-d-display',
  templateUrl: './d-display.component.html',
  styleUrls: ['./d-display.component.css']
})
export class DDisplayComponent implements OnInit {

  constructor(private ddisplay:DDisplayService) { }

  success:any;
  ngOnInit() {
    this.ddisplay.displayed().subscribe(
      response => {
        console.log(response);
        this.success=response
    },
    err => {
      this.success="error occured in retrieving data"
    })
  }

}
