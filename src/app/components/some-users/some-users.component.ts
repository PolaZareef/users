import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SomeUsersService } from 'src/app/services/some-users.service';

@Component({
  selector: 'app-some-users',
  templateUrl: './some-users.component.html',
  styleUrls: ['./some-users.component.css']
})
export class SomeUsersComponent implements OnInit {

  username:string='';
  email:string='';
  constructor(public some:SomeUsersService,private router:Router) { }

  ngOnInit(): void {
    
  } 
  submit(){
    this.router.navigate(['/home']);
  }

}
