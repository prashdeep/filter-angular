import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private users:User[];
  private selectedUser:User;
  private visible:boolean = true;

  private filterUserName:string;
  private quantity:number = 1;

  constructor(private userService:UserService) { }

  ngOnInit() {
    console.log('came insdie the ng On init method')
    this.userService.getAllUsers()
     .subscribe(users =>  this.users = users )
  }

  increment(){
     this.quantity ++;
  }

  decrement(){
    if (this.quantity > 1){
      this.quantity --;
    }
  }

  handleClick(user){
    console.log(user);
   this.selectedUser = user;
   this.quantity = 1;
  }
}
