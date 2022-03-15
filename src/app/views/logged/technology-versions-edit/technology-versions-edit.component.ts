import { TechnologyVersion } from './../../../_models/technology_version';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Technology } from '@app/_models/technology';
import { TechnologyService } from '@app/_services/technology.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technology-versions-edit',
  templateUrl: './technology-versions-edit.component.html',
  styleUrls: ['./technology-versions-edit.component.scss'],
})
export class TechnologyVersionsEditComponent implements OnInit {
  loading: boolean = false;
  idTechnology: string;
  idVersion: string;
  private sub: any;
  technologyVersion: TechnologyVersion;
  technology: Technology;

  constructor(
    private technologyService: TechnologyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editForm = new FormGroup({
    category: new FormControl('', Validators.required),
    technology: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    EOD: new FormControl(''),
    order: new FormControl('', Validators.required),
    url: new FormControl(''),
    note: new FormControl(''),
  });

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.route.params.subscribe((params) => {
      this.idTechnology = params.idTechnology;
      this.idVersion = params.id;
      this.technologyService
        .getVersionByID(this.idTechnology, this.idVersion)
        .then((res: { technology: Technology; version: TechnologyVersion }) => {
          this.technologyVersion = res.version;
          this.technology = res.technology;
          console.log(this.technologyVersion);
          this.loading = false;
        });
    });
  }

  edit() {}
}
