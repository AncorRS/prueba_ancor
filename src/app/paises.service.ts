import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

constructor(private http: HttpClient) { 

  this.getJSON().subscribe(data => {
    //console.log(data);
    console.log("servicio");
});

}

//NOS TRAEMOS LOS DATOS DEL JSON LOCAL
public getJSON(): Observable<any> {
  return this.http.get("../assets/cities.json");
}

//NOS TRAEMOS LOS DATOS DE LA API, USANDO EL IDENTIFICADOR COMO PARAMETRO
getTemperaturas(id:any){
  return this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=5b4a5fb7fff1a8f5a3c0cd68dc4e9a5b`)
}


}
