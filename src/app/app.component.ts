import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from './messages/messages.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  branding = 'Cisco Meraki';

  constructor(
  ) { }

  ngOnInit() {
    document.title = this.branding;
  }
}
