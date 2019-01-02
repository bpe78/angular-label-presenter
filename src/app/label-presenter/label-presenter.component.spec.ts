import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelPresenterComponent } from './label-presenter.component';

describe('LabelPresenterComponentComponent', () => {
  let component: LabelPresenterComponent;
  let fixture: ComponentFixture<LabelPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
