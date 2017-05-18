// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    //Definimos el template en línea
    //template: `<h1>{{titulo}}<</h1>
    //O bien lo vinculamos con un vista
    templateUrl: 'app/views/home.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    //Definimos las propiedaded
    public title:string;
    public description:string;
    
    constructor(){
        this.title = 'APP FAVORITOS';
        this.description = 'Aplicación web favoritos SPA con Angular2'
    }
}