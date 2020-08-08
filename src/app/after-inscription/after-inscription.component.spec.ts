import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterInscriptionComponent } from './after-inscription.component';

describe('AfterInscriptionComponent', () => {
  let component: AfterInscriptionComponent;
  let fixture: ComponentFixture<AfterInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
