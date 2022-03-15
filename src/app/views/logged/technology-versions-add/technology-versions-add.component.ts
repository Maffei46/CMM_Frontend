import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TechnologyService } from '@app/_services/technology.service';

@Component({
  selector: 'app-technology-versions-add',
  templateUrl: './technology-versions-add.component.html',
  styleUrls: ['./technology-versions-add.component.scss'],
})
export class TechnologyVersionsAddComponent implements OnInit {
  categorySelected: String;
  technologySelected: String;
  selectable;
  orderField;
  maxOrder: number = 0;
  loading: boolean = false;

  addForm = new FormGroup({
    category: new FormControl('', Validators.required),
    technology: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    EOD: new FormControl(''),
    order: new FormControl('', Validators.required),
    url: new FormControl(''),
    note: new FormControl(''),
  });

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
    this.technologyService.technologies.forEach((technlogy) => {
      if (technlogy.category == this.categorySelected) {
        this.selectable.push(technlogy);
      }
    });
    this.loading = false;
  }
  technlogyChanged() {
    this.loading = true;
    this.maxOrder = 0;
    const index = this.selectable.findIndex(
      (e) => e._id == this.technologySelected
    );
    var versions = this.selectable[index].versions;
    versions.forEach((version) => {
      if (this.maxOrder < version.order) {
        this.maxOrder = version.order;
      }
    });
    this.maxOrder = this.maxOrder + 10;
    this.orderField = this.maxOrder;
    this.loading = false;
  }
  add() {
    this.loading = true;
    if (this.addForm.valid) {
      this.technologyService.addVersion(this.addForm.value).then(() => {
        this.addForm.reset();
        this.loading = false;
        //TODO: add feedback
      });
    }
  }
}
