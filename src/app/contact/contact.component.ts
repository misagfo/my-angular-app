import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  firstName: any
  lastName: any
  receivedMessage: string = '';

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }

  onSubmit() {
    this.firstName = this.profileForm.value.firstName
    this.lastName = this.profileForm.value.lastName
  }
}
