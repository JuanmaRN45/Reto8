import { Component } from '@angular/core';
import { MensajesComponent } from '../mensajes/mensajes.component';
import { Mensajes } from '../mock-mensaje';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent {
  public bd:any
  public lista:any
  public _mensaje: MensajesComponent
  public mensajes = Mensajes
  constructor(){
    this._mensaje = new MensajesComponent
    this.mensajes = Mensajes
  }

  listarFavs(){
    const peticion =window.indexedDB.open("PacoApp")
				peticion.onsuccess= ((evento:any) =>{
					this.bd=evento.target.result;	
					console.log('Base de datos cargada.')
					const objectStore =this.bd.transaction('Favoritas', 'readonly').objectStore('Favoritas')
					const peticion = objectStore.getAll()
					peticion.onsuccess= (() =>{
						this.lista= peticion.result
						console.log(this.lista)
					}).bind(this)
				}).bind(this)
  }
}
