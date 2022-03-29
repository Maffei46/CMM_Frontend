import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagetikVersion } from '../_models/tagetik_version';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TagetikVersionService {
  tagetikVersions: TagetikVersion[] = [];
  fetched: boolean = false;
  public editingVersion: TagetikVersion;
  SERVER_TEMP: string = "https://4yf94bnqyg.execute-api.eu-west-1.amazonaws.com/CMM"

  constructor(private http: HttpClient, private route: Router) {}
  fetchAsync() {
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(
      this.SERVER_TEMP + '/tagetik_versions',
      requestOptions
    );
  }

  fetch() {
    return new Promise((resolve) => {
      this.fetchAsync().subscribe((result: TagetikVersion[]) => {
        console.log(result);
        this.tagetikVersions = result;
        this.fetched = true;
        return resolve(result);
      });
    });
  }
  private storageInitialized = false;
  load() {
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get(
      environment.Server + '/tagetik_versions/getAll',
      requestOptions
    );
  }

  isFetched() {
    return this.fetched;
  }
  add(tagetikVersion: any) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/tagetik_versions/add',
          tagetikVersion,
          requestOptions
        )
        .subscribe((result: TagetikVersion) => {
          this.tagetikVersions.push(result);
          return resolve(result);
        });
    });
  }
  async getByID(id: String) {
    return new Promise((resolve) => {
      if (!this.fetched) {
        this.fetchAsync().subscribe((result: TagetikVersion[]) => {
          this.tagetikVersions = result;
          this.fetched = true;
          const index = result.findIndex((e) => e._id == id);
          if (index != -1) {
            this.editingVersion = result[index];
          }
          return resolve(result[index]);
        });
      } else {
        const index = this.tagetikVersions.findIndex((e) => e._id == id);
        if (index != -1) {
          this.editingVersion = this.tagetikVersions[index];
        }
        return resolve(this.tagetikVersions[index]);
      }
    });
  }
  edit(tagetikVersion: any) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/tagetik_versions/edit',
          tagetikVersion,
          requestOptions
        )
        .subscribe((result: TagetikVersion) => {
          const index = this.tagetikVersions.findIndex(
            (e) => e._id == result._id
          );
          if (index != -1) {
            this.tagetikVersions[index] = result;
          }
          return resolve(result);
        });
    });
  }
  deleteVersion(id: string) {
    return new Promise((resolve) => {
      const requestOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      };
      this.http
        .post(
          environment.Server + '/tagetik_versions/delete',
          { _id: id },
          requestOptions
        )
        .subscribe((result: TagetikVersion) => {
          resolve(result);
        });
    });
  }
}
