import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getAllUsers():Observable<User[]>{
    console.log('came inside the get all users method')
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
