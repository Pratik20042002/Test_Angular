import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  view: 'summary' | 'details' = 'summary';

  showSummary() {
    this.view = 'summary';
  }

  showDetails() {
    this.view = 'details';
  }
}
