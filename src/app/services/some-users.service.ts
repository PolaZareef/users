import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class SomeUsersService {
  user={} as Users;

  constructor() { }
}
