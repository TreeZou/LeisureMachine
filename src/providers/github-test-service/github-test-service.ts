import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

/*
  Generated class for the GithubTestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubTestServiceProvider implements OnInit{

  constructor(public http: HttpClient) {
    console.log('Hello GithubTestServiceProvider Provider');
  }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
      return data;
    });
  }
}
