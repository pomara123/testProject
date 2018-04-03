import { Injectable,Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HttpRequest } from 'selenium-webdriver/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {
  @ViewChild('table') table: ElementRef;
  @ViewChild('textRow') textRow: ElementRef;

  itemCount: number = 4;
  btnText: string = 'Add an Item';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  

  getSummary() {

    const url = "https://en.wikipedia.org/w/api.php?format=json&formatversion=2&action=query&prop=extracts&exintro=&explaintext=&titles=Star%20Trek"; // site that doesn’t send Access-Control-*

    // Pass the key for your callback (in this case 'callback')
    // as the second argument to the jsonp method
    console.log("getSummary");
    
    this.http.jsonp(url, 'getSummaryCallback');
    
    
    /*
    const proxyurl = "https://test-project-again.herokuapp.com/";
    this.http.get<WikiPage>(url).subscribe 
    (data => {
      console.log(data.query.pages[0].extract);
      var text = data.query.pages[0].extract;

      for(var i = 0; i < text.length; i++) {
        var letterElement = document.createElement("td");
        letterElement.innerHTML = text[i];
        this.textRow.nativeElement.appendChild(letterElement);;
      }
    });*/
  }

  getSummaryCallback(jsonp) {
    console.log(jsonp.query.pages[0].extract);
      var text = jsonp.query.pages[0].extract;

      for(var i = 0; i < text.length; i++) {
        var letterElement = document.createElement("td");
        letterElement.innerHTML = text[i];
        this.textRow.nativeElement.appendChild(letterElement);;
      }
  }
}

interface WikiPage {
  query : {
    pages : [
      {
        extract: string;
      }
    ]
  }
}
