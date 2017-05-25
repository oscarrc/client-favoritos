//Importamos el componente del core de Angular
import {Component} from '@angular/core';

//Definimos el decorador del componente
@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html'
})

//Exportamos la clase
export class FavoritosListComponent{
    //Definimos una propiedad
    public title:string;
    //La inicializamos con el constructor
    constructor(){
        this.title = 'Listado de marcadores';
    }
}