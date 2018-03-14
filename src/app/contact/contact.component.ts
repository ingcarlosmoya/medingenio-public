import { Component, OnInit } from '@angular/core';
import { Mail } from './../services/mail.service';
import { MailService } from './../services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mail: Mail;
  getData: string;
  postData: string;
  isMessageSending: boolean = false;
  messageSent: boolean = false;

  constructor(public mailService: MailService) { }

  ngOnInit() {
    this.mail = new Mail();
  }

  post() {
    this.isMessageSending = true;
    this.mailService.post(this.mail).subscribe(
      data => {
        this.messageSent = true;
        setTimeout(function () {
          this.messageSent = false;
        }.bind(this), 3000);
        this.cleanForm();
        console.log("The email has been sent!");
      },
      error => {
        console.log(error);
        this.isMessageSending = false;
      },
      () => {
        this.isMessageSending = false;
      }
    );
  }

  cleanForm(): any {
    this.mail.name = " ";
    this.mail.lastName = " ";
    this.mail.email = " ";
    this.mail.phone = " ";
    this.mail.message = " ";
  }

}
