import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetSequenceComponent } from "./get-sequence/get-sequence.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GetSequenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LabSequence';
}


