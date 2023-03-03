import { Component } from '@angular/core';
import { Peliculas } from '../peliculas';
import { ImdbService } from '../imdb.service';
import { IDBService } from '../idb.service';
import { RepartoComponent } from '../reparto/reparto.component';

import { MensajesComponent } from '../mensajes/mensajes.component';
import { Mensajes } from '../mock-mensaje';
@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent {
  public reparto: RepartoComponent
  public peliculas : any;
  public actores : any;
  public i:any = 0;
  public _mensaje: MensajesComponent
  public mensajes = Mensajes
  public url:string
  public busqueda:string
  constructor(private _service: ImdbService,private _idb:IDBService){
    this._mensaje = new MensajesComponent
    this.mensajes = Mensajes
    this.reparto = new RepartoComponent
    this.url= ''
    this.busqueda= ''
  }

  mostrarPelis(): void{
    this.mensajes =this._mensaje.mostrarMensaje()
    this._idb.anadirFav();
    let input: any = document.getElementById('buscador');
    this.url = "https://imdb-api.com/en/API/SearchMovie/k_howoqd6v/" + input.value;
    this.busqueda = input.value
    this._service.getPeliculas(this.url).subscribe(peliculas => this.peliculas = peliculas);
  }
  anadirFav(objeto:Peliculas[]){
     this._idb.insertar(objeto,this.mensajes);
  }
  mostrarReparto(objeto:Peliculas[]){
    this.url = "https://imdb-api.com/en/API/FullCast/k_howoqd6v/"+objeto
    this._service.verActores(this.url).subscribe(actores => this.actores = actores);
  }
}

