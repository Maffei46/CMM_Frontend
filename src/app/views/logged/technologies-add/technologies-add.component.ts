import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TechnologyService } from '@app/_services/technology.service';

@Component({
  selector: 'app-technologies-add',
  templateUrl: './technologies-add.component.html',
  styleUrls: ['./technologies-add.component.scss'],
})
export class TechnologiesAddComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    note: new FormControl(''),
  });
  loading: boolean = false;
  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {}
  add() {
    if (this.addForm.valid) {
      this.loading = true;
      this.technologyService.add(this.addForm.value).then(() => {
        this.addForm.reset();
        //TODO: Add feedback
        this.loading = false;
      });
    }
  }
}
