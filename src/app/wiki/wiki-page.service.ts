import { Injectable } from '@angular/core';
import { WikiPage } from './wiki-page';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class WikiPageService {

  private pageUrl = 'https://en.wikipedia.org/w/api.php?format=json&formatversion=2&action=query&prop=extracts&exintro=&explaintext=&titles=Star%20Trek';

  constructor (private http: Http) {}

  // get("/api/contacts")
  getPage(): Promise<void | WikiPage> {
    return this.http.get(this.pageUrl)
               .toPromise()
               .then(response => response.json() as WikiPage)
               .catch(this.handleError);
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}
