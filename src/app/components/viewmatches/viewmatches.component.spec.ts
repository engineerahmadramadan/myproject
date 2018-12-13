import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmatchesComponent } from './viewmatches.component';

describe('ViewmatchesComponent', () => {
  let component: ViewmatchesComponent;
  let fixture: ComponentFixture<ViewmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
