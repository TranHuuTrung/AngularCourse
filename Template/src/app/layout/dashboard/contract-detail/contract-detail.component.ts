import { Subscription } from 'rxjs/Subscription';
import { JwtserviceService } from './../../../shared/jwtservice.service';
import { UserService } from './../../../shared/user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';

@Component({
  selector: 'app-contract-detail',
  templateUrl: './contract-detail.component.html',
  styleUrls: ['./contract-detail.component.scss']
})
export class ContractDetailComponent implements OnInit, OnDestroy {
  userObj: any;
  id: number;
  listTotal = [];
  unSubcriptionId: Subscription;
  unSubscriptionContract: Subscription;
  constructor( private route: ActivatedRoute,
               private userService: UserService,
               private jwtService: JwtserviceService ) { }
  ngOnInit() {
    this.unSubcriptionId = this.route.params.subscribe( params => this.id = params['id']);
    console.log(this.id);
    this.userObj = this.jwtService.getUserObj();
    console.log(this.userObj.result.customerId);
    this.unSubscriptionContract = this.userService.getAccountContractDetail(this.userObj.result.customerId, this.id)
      .subscribe(data => {
        console.log(data);
        data.demandDate = moment(data.demandDate).format('DD/MM/YYYY').toString();
        data.visitDate = moment(data.visitDate).format('DD/MM/YYYY, hh:mm').toString();
        data.endDate = moment(data.endDate).format('DD/MM/YYYY').toString();
        this.listTotal = data;
        console.log(this.listTotal);
      });
  }
  ngOnDestroy() {
    this.unSubcriptionId.unsubscribe();
    this.unSubscriptionContract.unsubscribe();
  }

}

