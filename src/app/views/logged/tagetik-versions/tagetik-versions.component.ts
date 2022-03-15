import { loadTagetikVersions } from './../../../state/tagetikVersions/tagetikVersion.action';
import { Component, OnInit } from '@angular/core';
import { TagetikVersionService } from '@app/_services/tagetik-version.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tagetik-versions',
  templateUrl: './tagetik-versions.component.html',
  styleUrls: ['./tagetik-versions.component.scss'],
})
export class TagetikVersionsComponent implements OnInit {
  loading: boolean = false;
  constructor(private tagetikVersionService: TagetikVersionService) {}

  ngOnInit(): void {
    this.loading = true;
    this.tagetikVersionService.fetch().then(() => {
      this.loading = false;
    });
    //this.store.dispatch(loadTagetikVersions());
  }
  isFetched() {
    return this.tagetikVersionService.fetched;
  }
  tagetikVersions() {
    return this.tagetikVersionService.tagetikVersions;
  }
  convertDate(string) {
    if (!string) {
      return '';
    }
    return new Date(string).toLocaleDateString();
  }
}
