import { Component } from '@angular/core';
import { Observation } from 'src/models/observation.model';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-summary-views',
  templateUrl: './summary-views.component.html',
  styleUrls: ['./summary-views.component.scss']
})
export class SummaryViewsComponent {
  observation: Observation | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getObservation().subscribe(data => {
      this.observation = data;
    });
  }
}
