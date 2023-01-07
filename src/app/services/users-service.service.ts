import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';



@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<Users[]>{
    return this.http.get<Users[]>('https://users-api-production-e5aa.up.railway.app/users');
  }
}
