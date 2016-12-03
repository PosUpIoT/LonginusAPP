import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { URL_API } from './config';


/*
  Generated class for the PostService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PostService {

  private URL_POST = URL_API + "/posts";

  constructor(public http: Http) {
    
  }


  public findPosts(lat: number, lon: number, distance: number, limit: number, offset: number){
    distance = distance * 1000;
    let URL_POST_ALL = this.URL_POST + "?lat=" + lat + "&lon=" + lon + "&distance=" + distance + "&limit=" + limit + "&offset=" + offset;

    console.log(URL_POST_ALL);
    return this.http.get(URL_POST_ALL).map(response => response.json()).catch(error => error);
  }
}
