import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletematchComponent } from './deletematch.component';

describe('DeletematchComponent', () => {
  let component: DeletematchComponent;
  let fixture: ComponentFixture<DeletematchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletematchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
