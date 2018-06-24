import { JwtserviceService } from './../shared/jwtservice.service';
import { Component, OnInit, Optional, forwardRef } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';


// tslint:disable-next-line:component-class-suffix

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  username: string;
  password: string;
  isWrongPass: boolean;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private jwt: JwtserviceService,
    private router: Router ) {}

  ngOnInit() {
    this.isWrongPass = false;
  }
  onSubmit() {
    this.isWrongPass = false;
    this.userService.login(this.username, this.password).subscribe(data => {
      // tslint:disable-next-line:no-unused-expression
      // g
      console.log(data);
       this.router.navigate(['/dashboard']);
    }, err => {
      console.log(err);
      this.isWrongPass = true;
    });
  }
}
