import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationHistoryListComponent } from './publication-history-list.component';

describe('PublicationHistoryListComponent', () => {
  let component: PublicationHistoryListComponent;
  let fixture: ComponentFixture<PublicationHistoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationHistoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
