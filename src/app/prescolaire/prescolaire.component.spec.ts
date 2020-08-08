import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescolaireComponent } from './prescolaire.component';

describe('PrescolaireComponent', () => {
  let component: PrescolaireComponent;
  let fixture: ComponentFixture<PrescolaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescolaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
