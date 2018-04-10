import { Component, OnInit } from '@angular/core';
import { WikiPage } from '../wiki-page';
import { WikiPageService } from '../wiki-page.service';

@Component({
  selector: 'app-wiki-page-details',
  templateUrl: './wiki-page-details.component.html',
  styleUrls: ['./wiki-page-details.component.css'],
  providers: [WikiPageService]
})
export class WikiPageDetailsComponent implements OnInit {

  wikipage: WikiPage;
  btnText: string = 'Get Page';

  
  constructor(private wikiPageService: WikiPageService) { }

  ngOnInit() {}

  getPage() {
    var wikiJson = this.wikiPageService.getPage();
    console.log(wikiJson);
  }
}
