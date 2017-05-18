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
    //Definimos un array de favoritos
    public favoritos:Array<string>;
    //Definimos el flag visible
    public favoritosVisibles:boolean;
    //Definimos la propiedad color
    public color:string;
    
    //La inicializamos con el constructor
    constructor(){
        this.title = 'Listado de marcadores';
        this.favoritos = ['oscarrc.me', 'youtube.com', 'twitter.com'];
        this.favoritosVisibles = false;
    }
    
    //Creamos los métodos para mostrar u ocultar los favoritos
    showFavoritos(){
        this.favoritosVisibles = true;
    }
    
    hideFavoritos(){
        this.favoritosVisibles = false;
    }
    
    changeColor(){
        this.color = "red";
    }
}