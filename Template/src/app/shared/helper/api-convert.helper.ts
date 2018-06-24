import { Account } from './../models/accounts/accounts';
import { AccountResponse } from './../models/accounts-response';
import { Injectable } from '@angular/core';

import * as moment from 'moment';

@Injectable()
export class ApiConvertHelper {

  constructor() { }
  AccountConvert(model: AccountResponse): Account {
    const result = new Account();
    if (model.userId) {
        result.id = model.userId;
    }
    result.customerId = model.customerId;
    result.userName = model.name;
    result.email = model.userName;
    result.groupId = model.groupId;

    // // result.number
    // // result.password
    // result.permission = [];
    // PermissionArr.forEach(data => {
    //     let pms = new Permission();
    //     pms.name = data.name;
    //     pms.text = data.text;
    //     if (model.permissions.find(p => p == data.name))
    //         pms.value = true;
    //     else
    //         pms.value = false;
    //     result.permission.push(pms);
    // });
    // result.status = model.isActive ? Status.Active : Status.UnActive;
    // result.userName = model.userName;
     return result;
}

}
