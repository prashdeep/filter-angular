import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input() user:string;
  loggedInUser:string;
  @Output() test = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('printing the user name ', this.user);
    this.loggedInUser = this.user;
  }

  onClickHandle(){
    console.log('came inside the on click handle method')
    this.test.emit();
  }



}
