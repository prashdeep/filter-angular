import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  templateUrl: './ifelse.component.html',
  styleUrls: ['./ifelse.component.css']
})
export class IfelseComponent implements OnInit {

  display:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.display = ! this.display;
  }
}
