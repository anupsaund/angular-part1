import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'sandbox2';
  timer = 0;

  movies = [
    {'id':1, 'title': 'Shrek', 'castmembers': ['donkey', 'fiona']},
    {'id':2, 'title': 'Shrek the third', 'castmembers': ['donkey', 'fiona', 'shrek', 'rumple stiltskin']}
  ];
  color = 'dodgerblue';

  ngOnInit() {
    // fetch a colour from API
    this.color = 'green';
    setInterval(()=>this.timer = Date.now(), 1000)
  }
}
