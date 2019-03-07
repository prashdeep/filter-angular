import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/User';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(users: User[], args?: string): User[] {
    if (!args || args[0].length === 0){
      return users;
    }
    else {
      return users.filter(user => user.username.toLowerCase().includes(args.toLowerCase()) );
    }
  }

}
