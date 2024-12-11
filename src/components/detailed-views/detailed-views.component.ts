import { Component } from '@angular/core';
import { Data, Observation } from 'src/models/observation.model';
import { DataService } from 'src/service/data.service';

@Component({
  selector: 'app-detailed-views',
  templateUrl: './detailed-views.component.html',
  styleUrls: ['./detailed-views.component.scss']
})
export class DetailedViewsComponent {
  observation: Observation | undefined;
  selectedData: Data | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getObservation().subscribe(data => {
      this.observation = data;
    });
  }

  onSelect(data: Data): void {
    this.selectedData = data;
  }
}
