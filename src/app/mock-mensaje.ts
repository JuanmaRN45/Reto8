import { Mensaje } from './mensaje';

export const Mensajes: Mensaje[] = [
  {titulo: 'Favoritos',description:'Haz click en fav para añadir a favoritas',tipo:'info' },
  {titulo: 'Error',description:'No se pueden añadir la misma pelicula 2 veces',tipo:'error'},
  {titulo: 'Bien hecho',description:'Su pelicula ha sido añadida a favoritos',tipo:'exito' },
  {titulo: 'Listado Bien',description:'Se ha listado con éxito',tipo:'exito' },
  {titulo: 'No hay Favoritas',description:'No hay Películas en Favoritas',tipo:'error' },
];