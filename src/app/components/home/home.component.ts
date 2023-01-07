import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SomeUsersService } from 'src/app/services/some-users.service';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:Users[]=[];

  constructor(private UserService:UsersServiceService,private router:Router,private some:SomeUsersService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe(res=>{
      this.users=res;
    });
  }
  getUser(user:Users){
    this.some.user=user;
    this.router.navigate(['/user']);
  }

}
