import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TagetikVersionService } from '@app/_services/tagetik-version.service';

@Component({
  selector: `app-tagetik-versions-add`,
  templateUrl: `./tagetik-versions-add.component.html`,
  styleUrls: [`./tagetik-versions-add.component.scss`],
})
export class TagetikVersionsAddComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl('', Validators.required),
    GA_date: new FormControl(''),
    note: new FormControl(''),
  });
  loading: boolean = false;
  constructor(
    private tagetikVersionService: TagetikVersionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  add() {
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      this.loading = true;
      this.tagetikVersionService.add(this.addForm.value).then(() => {
        this.loading = false;
        this.router.navigate(['reserved', 'tagetik_versions']);
      });
    }
  }
}
