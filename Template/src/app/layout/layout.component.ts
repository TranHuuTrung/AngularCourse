import { UserService } from './../shared/user.service';
import { Observable, Subscription } from 'rxjs/';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor(private itunes: UserService,
              private router: Router
              ) {
  }

  ngOnInit() {
    if (this.router.url === '/' || this.router.url === '#') {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnDestroy() {
  }
}
