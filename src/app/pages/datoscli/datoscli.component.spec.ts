import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoscliComponent } from './datoscli.component';

describe('DatoscliComponent', () => {
  let component: DatoscliComponent;
  let fixture: ComponentFixture<DatoscliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatoscliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoscliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
