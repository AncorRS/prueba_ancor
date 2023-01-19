import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PaisesService } from 'src/app/paises.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  paises:any[] = [];
  user: any;
  countries: any[];
  selectedCountries: any[];
    
  constructor(
    public activatedRoute: ActivatedRoute,
    public servicio: PaisesService,
    private router: Router
    ) {}
    
  ngOnInit(): void {
    //TRAEMOS IDENTIFICADOR DE LA URL
    this.activatedRoute.paramMap.subscribe(params => {
    console.log("id del pais");
    console.log(params.get('i'));
    this.user = params.get('user')
  });

    //TRAEMOS PAISES DEL SERVICIO
    this.servicio.getJSON().subscribe(data => {
    this.paises = data;
    console.log(data);
  });
    }

  select(){
    console.log("SELECCIONADO");
    console.log(this.selectedCountries[0]);
    console.log(this.selectedCountries.length);
  }

  //ELIMINAMOS PAISES DE LA LISTA DE PREFERIDOS
  eliminar(i:any){
    this.selectedCountries.splice(i, 1);
  }

  //ENVIAMOS A COMPONENTE CIUDAD 
  goCiudad(i:any){
    this.router.navigate(['/ciudad', i]);
  }
}