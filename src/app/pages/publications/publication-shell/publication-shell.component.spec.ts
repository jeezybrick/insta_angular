import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationShellComponent } from './publication-shell.component';

describe('PublicationShellComponent', () => {
  let component: PublicationShellComponent;
  let fixture: ComponentFixture<PublicationShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
