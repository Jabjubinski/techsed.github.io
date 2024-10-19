import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apiTraining';

  onActivate(event: any) {
    window.scroll(0, 0);
  }
}
