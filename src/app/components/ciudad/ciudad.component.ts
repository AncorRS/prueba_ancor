import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisesService } from 'src/app/paises.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  paisTemp: any;
  idCiudad: any;

  //SERÍA MEJOR HACER UN MODELO.TS APARTE PARA LOS VALORES QUE TRAE EL JSON
  cloudIcon: any;
  description: any;
  name: any;
  humedad: any;
  temperatura: any;
  temp_max: any;
  temp_min: any;
  presion: any;
  latitud:any;
  longitud: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public servicio: PaisesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    //NOS TRAEMOS EL PARAMETRO IDENTIFICADOR DE LA CIUDAD
    this.activatedRoute.paramMap.subscribe(params => {
      console.log("id del pais");
      console.log(params.get('i'));
      this.idCiudad = params.get('i')
    });

    //TRAEMOS LA INFORMACION DE LA CIUDAD DEL SERVICIO
    this.servicio.getTemperaturas(this.idCiudad).subscribe(data => {
      console.log(data);
      this.paisTemp = data;
      this.cloudIcon = this.paisTemp.weather[0].icon;
      this.description = this.primeraLetraMayuscula(this.paisTemp.weather[0].description);
      this.humedad = this.paisTemp.main.humidity;
      this.presion = this.paisTemp.main.pressure;
      this.latitud = this.paisTemp.coord.lat;
      this.longitud = this.paisTemp.coord.lon;

      //CONVERTIMOS KELVIN A CELSIUS, NO SÉ SI ES CORRECTO, HE BUSCADO LA CONVERSON EN GOOGLE
      this.temperatura = Math.round((this.paisTemp.main.temp - 273.15));
      this.temp_max = Math.round((this.paisTemp.main.temp_max - 273.15));
      this.temp_min = Math.round((this.paisTemp.main.temp_min - 273.15));

      this.name = this.paisTemp.name;
      console.log(this.paisTemp.cod);
    })
  }

  primeraLetraMayuscula( cadena:any ) {
  
    return cadena.toLowerCase()
              .trim()
              .split(' ')
              .map(   x => x[0].toUpperCase() + x.substr(1) )
              .join(' ');  
  }
}
