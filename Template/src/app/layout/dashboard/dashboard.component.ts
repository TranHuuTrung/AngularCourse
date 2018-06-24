import { element } from 'protractor';
import { ActivatedRoute } from '@angular/router';
import { Notice } from './../../shared/models/notice';
import { JwtserviceService } from './../../shared/jwtservice.service';
import { UserService } from './../../shared/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from '../../shared/models/accounts/accounts';
import * as moment from 'moment';
import { Subscription, Observable } from 'rxjs/';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  id: number;
  listTotal: Subscription[];
  unScription: Subscription;
  userId: number;
  user: Account;
  groupId: number;
  constructor(private userService: UserService,
    private jwtService: JwtserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('a');
    this.userId = this.jwtService.getUserId();
    this.unScription = this.userService.getAccountRequest(this.userId)
      .subscribe(data => {
        console.log('b');
        // tslint:disable-next-line:no-shadowed-variable
        data.dashBoardItems.forEach( element => {
          element.demand.visitOrderDate = moment(element.demand.visitOrderDate).format('DD/MM/YYYY').toString();
          element.demand.demandDate = moment(element.demand.demandDate).format('DD/MM/YYYY').toString();
          if (element.saleOrder !== null) {
            element.saleOrder.saleOrderDate = moment(element.saleOrder.saleOrderDate).format('DD/MM/YYYY').toString();
            // tslint:disable-next-line:prefer-const
            for (let salePayment of element.saleOrder.salePayments) {
              salePayment.paymentDueDate = moment(salePayment.paymentDueDate).format('DD/MM/YYYY').toString();
            }
          }
          if (element.generalAppointment !== null) {
            // tslint:disable-next-line:prefer-const
            for (let appoiment of element.generalAppointment.appointments) {
              appoiment.visitDate = moment(appoiment.visitDate).format('DD/MM/YYYY').toString();
            }
          }
        });
         this.listTotal = data.dashBoardItems;
      });
  }
  ngOnDestroy() {
    this.unScription.unsubscribe();
  }
}
