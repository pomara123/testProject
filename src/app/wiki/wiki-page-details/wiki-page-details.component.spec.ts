import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiPageDetailsComponent } from './wiki-page-details.component';

describe('WikiPageDetailsComponent', () => {
  let component: WikiPageDetailsComponent;
  let fixture: ComponentFixture<WikiPageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WikiPageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WikiPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
