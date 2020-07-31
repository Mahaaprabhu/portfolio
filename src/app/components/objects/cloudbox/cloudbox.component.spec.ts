import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudboxComponent } from './cloudbox.component';

describe('CloudboxComponent', () => {
  let component: CloudboxComponent;
  let fixture: ComponentFixture<CloudboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
