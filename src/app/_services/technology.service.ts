import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Technology } from '../_models/technology';

@Injectable({ providedIn: 'root' })
export class TechnologyService {
  technologies: Technology[] = [];
  fetched: boolean = false;
  constructor(private http: HttpClient, private route: Router) {}

  fetchAsync() {
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(
      environment.Server + '/technology/getAll',
      requestOptions
    );
  }

  fetch() {
    return new Promise((resolve) => {
      this.fetchAsync().subscribe((result: Technology[]) => {
        this.technologies = result;
        this.fetched = true;
        return resolve(result);
      });
    });
  }

  isFetched() {
    return this.fetched;
  }

  add(technology: any) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/technology/add',
          technology,
          requestOptions
        )
        .subscribe((result: Technology) => {
          this.technologies.push(result);
          return resolve(result);
        });
    });
  }

  addVersion(technologyVersion: any) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/technology/version/add',
          technologyVersion,
          requestOptions
        )
        .subscribe((result: Technology) => {
          const index = this.technologies.findIndex((e) => e._id == result._id);
          if (index != -1) {
            this.technologies[index] = result;
          }
          return resolve(result);
        });
    });
  }
  getByID(id: String) {
    return new Promise((resolve) => {
      if (!this.fetched) {
        this.fetchAsync().subscribe((result: Technology[]) => {
          this.technologies = result;
          this.fetched = true;
          const index = this.technologies.findIndex((e) => e._id == id);
          if (index != -1) {
            return resolve(this.technologies[index]);
          }
        });
      } else {
        const index = this.technologies.findIndex((e) => e._id == id);
        if (index != -1) {
          return resolve(this.technologies[index]);
        }
      }
    });
  }
  getVersionByID(idTechnology: String, idVersion: String) {
    return new Promise((resolve) => {
      if (!this.fetched) {
        this.fetchAsync().subscribe((result: Technology[]) => {
          this.technologies = result;
          this.fetched = true;

          const index = this.technologies.findIndex(
            (e) => e._id == idTechnology
          );
          if (index != -1) {
            const index2 = this.technologies[index].versions.findIndex(
              (e) => e._id == idVersion
            );
            if (index2 != -1) {
              return resolve({
                technology: this.technologies[index],
                version: this.technologies[index].versions[index2],
              });
            }
          }
        });
      } else {
        const index = this.technologies.findIndex((e) => e._id == idTechnology);
        if (index != -1) {
          const index2 = this.technologies[index].versions.findIndex(
            (e) => e._id == idVersion
          );
          if (index2 != -1) {
            return resolve({
              technology: this.technologies[index],
              version: this.technologies[index].versions[index2],
            });
          }
        }
      }
    });
  }
  edit(technology: any) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/technology/edit',
          technology,
          requestOptions
        )
        .subscribe((result: Technology) => {
          const index = this.technologies.findIndex((e) => e._id == result._id);
          if (index != -1) {
            this.technologies[index] = result;
            return resolve(result);
          }
        });
    });
  }
}
