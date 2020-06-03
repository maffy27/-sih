import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sih';

  public scrollToElement(el): void {
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
