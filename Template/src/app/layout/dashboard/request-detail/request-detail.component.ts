import { UserService } from './../../../shared/user.service';
import { JwtserviceService } from './../../../shared/jwtservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.scss']
})
export class RequestDetailComponent implements OnInit {
  id: number;
  userId: number;
  result = [];
  constructor( private route: ActivatedRoute,
                private jwtService: JwtserviceService,
              private userService: UserService ) { }

  ngOnInit() {
    this.userId = this.jwtService.getUserId();
    this.route.params
      .subscribe( params => this.id = params['id']);
    console.log(this.id);
    this.userService.getAccountDetail( this.userId, this.id)
      .subscribe(data => {
        data.visitOrderDate = moment(data.visitOrderDate).format('DD/MM/YYYY, h:mm').toString();
        this.result = data;
        console.log(this.result);
      });
  }

}
