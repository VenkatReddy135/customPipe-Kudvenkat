import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  searchTerm;
  employees=[{id:1,name:"venkat",gender:"male"},
{id:2,name:"shiva",gender:"male"},
{id:3,name:"rishitha",gender:"female"}]
}
