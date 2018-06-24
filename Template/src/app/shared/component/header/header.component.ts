import { JwtserviceService } from './../../jwtservice.service';
import { UserService } from './../../user.service';
import { Observable } from 'rxjs/';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: Observable<any>;
  closeNav = false;
  constructor(private userService: UserService,
              private jwtService: JwtserviceService,
              private router: Router
              ) { }

  ngOnInit() {
    const dom: any = document.querySelector('section');
    const slivebar: any = document.getElementById('navigateleft');
    const icon_toggle: any = document.getElementById('icon_toggle');
    dom.classList.add('push_right');
    slivebar.classList.add('push_right');
    icon_toggle.classList.add('push_right');
    this.username = this.userService.getUserName();
    this.userService.watchStorage()
      .map( data => {
        console.log(this.username);
        this.username = data;
      });

  }

  toggleNav() {
    const slivebar: any = document.getElementById('navigateleft');
    const icon_toggle: any = document.getElementById('icon_toggle');
    if (!this.closeNav) {
      const dom: any = document.querySelector('section');
      dom.classList.remove('push_right');
      slivebar.classList.remove('push_right');
      icon_toggle.classList.remove('push_right');
      this.closeNav = !this.closeNav;
    } else {
      const dom: any = document.querySelector('section');
      dom.classList.add('push_right');
      slivebar.classList.add('push_right');
      icon_toggle.classList.add('push_right');
      this.closeNav = !this.closeNav;
    }
  }

  logout() {
    this.userService.logout()
      .subscribe(data => {
        this.jwtService.destroyToken();
        this.router.navigate(['/login']);
      });
  }
}
