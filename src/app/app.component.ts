import { Component } from '@angular/core';
import { textInputService } from './text-input/textInput.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [textInputService]
})
export class AppComponent {
}
