import { Component, OnInit } from '@angular/core';
import { Technology } from '@app/_models/technology';
import { TagetikVersionService } from '@app/_services/tagetik-version.service';
import { TechnologyService } from '@app/_services/technology.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  loading: boolean = false;
  technologies: Technology[] = [];
  
  constructor(private tagetikVersionService: TagetikVersionService,private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.loading = true;
    this.tagetikVersionService.fetch().then(() => {
      this.technologyService.fetch().then(() => {
        this.technologies = this.technologyService.technologies;
        this.loading = false;
      });
    });
  }

  tagetikVersions() {
    return this.tagetikVersionService.tagetikVersions;
  }

}
