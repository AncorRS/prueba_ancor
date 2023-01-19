import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadComponent } from './ciudad.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CiudadComponent', () => {
  let component: CiudadComponent;
  let fixture: ComponentFixture<CiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`valores`, (() => {
    expect(component.humedad).toBePositiveInfinity;
    expect(component.servicio.getTemperaturas.length).toHaveSize;
  }));
});
