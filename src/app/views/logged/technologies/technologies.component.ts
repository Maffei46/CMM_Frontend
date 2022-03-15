import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '@app/_services/technology.service';
import { Technology } from '../../../_models/technology';
import { TechnologyVersion } from '../../../_models/technology_version';
@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  categorySelected: String;
  technologySelected: number;
  selectable;
  versions: TechnologyVersion[];
  loading: boolean = false;
  selectedTechnology: Technology;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.loading = true;
    this.technologyService.fetch().then(() => {
      this.loading = false;
    });
  }
  column1Changed() {
    this.loading = true;
    this.selectable = [];
    this.versions = [];
    this.technologySelected = null;
    this.technologyService.technologies.forEach((technlogy) => {
      if (technlogy.category == this.categorySelected) {
        this.selectable.push(technlogy);
      }
    });
    this.loading = false;
  }
  column2Changed() {
    this.loading = true;
    var versions = this.selectable[this.technologySelected].versions;
    this.versions = versions.sort((a, b) => {
      a.order > b.order;
    });
    this.selectedTechnology = this.selectable[this.technologySelected];
    this.loading = false;
  }
}
