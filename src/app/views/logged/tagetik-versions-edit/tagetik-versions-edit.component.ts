import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TagetikVersionService } from '@app/_services/tagetik-version.service';
import { TagetikVersion } from '../../../_models/tagetik_version';

@Component({
  selector: 'app-tagetik-versions-edit',
  templateUrl: './tagetik-versions-edit.component.html',
  styleUrls: ['./tagetik-versions-edit.component.scss'],
})
export class TagetikVersionsEditComponent implements OnInit {
  id: string;
  private sub: any;
  tagetikVersion: TagetikVersion;
  loading: boolean = true;

  editForm = new FormGroup({
    _id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    GA_date: new FormControl(''),
    note: new FormControl(''),
    current: new FormControl('', Validators.required),
  });

  constructor(
    private route: ActivatedRoute,
    private tagetikVersionService: TagetikVersionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.tagetikVersionService
        .getByID(this.id)
        .then((res: TagetikVersion) => {
          this.loading = false;
          this.tagetikVersion = res;
          // this.tagetikVersion.GA_date = new Date(
          //   this.tagetikVersion.GA_date
          // ).toLocaleDateString();
          console.log(
            new Date(this.tagetikVersion.GA_date).toLocaleDateString()
          );
        });
    });
  }
  edit() {
    if (this.editForm.valid) {
      this.loading = true;
      this.tagetikVersionService.edit(this.editForm.value).then(() => {
        this.loading = false;
      });
    }
  }
  deleteF(id) {
    this.loading = true;
    this.tagetikVersionService.deleteVersion(id).then(() => {
      this.loading = false;
      this.router.navigate(['reserved', 'tagetik_versions']);
    });
  }
}
