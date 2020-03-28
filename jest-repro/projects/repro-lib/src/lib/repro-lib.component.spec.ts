import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproLibComponent } from './repro-lib.component';

describe('ReproLibComponent', () => {
  let component: ReproLibComponent;
  let fixture: ComponentFixture<ReproLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
