import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionListeComponent } from './inscription-liste.component';

describe('InscriptionListeComponent', () => {
  let component: InscriptionListeComponent;
  let fixture: ComponentFixture<InscriptionListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
