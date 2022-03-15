import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnologyService } from '@app/_services/technology.service';
import { Technology } from '../../../_models/technology';
@Component({
  selector: 'app-technologies-edit',
  templateUrl: './technologies-edit.component.html',
  styleUrls: ['./technologies-edit.component.scss'],
})
export class TechnologiesEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private router: Router
  ) {}
  editForm = new FormGroup({
    _id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    note: new FormControl(''),
  });
  loading: boolean = false;
  id: string;
  private sub: any;
  technology: Technology;

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.technologyService.getByID(this.id).then((res: Technology) => {
        this.loading = false;
        this.technology = res;
      });
    });
  }
  edit() {
    if (this.editForm.valid) {
      this.loading = true;
      this.technologyService.edit(this.editForm.value).then(() => {
        //TODO: add feedback
        this.loading = false;
      });
    }
  }
}
