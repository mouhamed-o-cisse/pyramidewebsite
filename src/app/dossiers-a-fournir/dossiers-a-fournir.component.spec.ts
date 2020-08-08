import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossiersAFournirComponent } from './dossiers-a-fournir.component';

describe('DossiersAFournirComponent', () => {
  let component: DossiersAFournirComponent;
  let fixture: ComponentFixture<DossiersAFournirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossiersAFournirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossiersAFournirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
