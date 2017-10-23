import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadpostComponent } from './loadpost.component';

describe('LoadpostComponent', () => {
  let component: LoadpostComponent;
  let fixture: ComponentFixture<LoadpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
