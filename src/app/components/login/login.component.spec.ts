import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { PaisesService } from '../../paises.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [ PaisesService ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
      //
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`valores`, (() => {
    component.onSubmit();
    component.formul.controls['nombre'].setValue('');
    component.formul.controls['clave'].setValue('');
    
    //component.formul.value.clave.setValue('');
    expect(component.formul.value).toBeNull;
  }));
});
