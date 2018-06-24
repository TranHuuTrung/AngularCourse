import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.scss']
})
export class RequestCreateComponent implements OnInit {
  name = '';
  insurrance = '';
  isClick = '';
  isChange = '';
  isChangeSer = '';
  type = '';
  type_item = '';
  insurrance_item = '';
  A = [ 'hello', 'hi'];
  constructor() { }

  ngOnInit() {

  }

  requestClick(name: string) {
    this.isClick = name;
  }
  requestChange(name: string) {
    this.isChange = name;
  }
  requestChangeSer(name: string) {
    this.isChangeSer = name;
  }
  addService() {

  }

}
