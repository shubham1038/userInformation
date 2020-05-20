import { Component, OnInit } from '@angular/core';
import { InteractionService } from './core/service/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-data';
  constructor(private inreractionService: InteractionService) { }

  ngOnInit(): void {

  }
}
