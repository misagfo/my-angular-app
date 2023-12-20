import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();

 constructor() {}

  ngOnInit(): void {}

 sendMessage() {
    this.messageEvent.emit('Hello from About!');
  }
 
}
