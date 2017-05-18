//Importamos los componentes necesarios
import { NgModule }  	from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

//Importamos el FormsModule
import { FormsModule }  from '@angular/forms';

//Importamos el componente favoritos-list
import { FavoritosListComponent } from './components/favoritos-list.component';
 
@NgModule({
  imports:  	[ BrowserModule, FormsModule ],
  //Añadimos el componente en declarations
  declarations: [ 
                    AppComponent,
                    FavoritosListComponent
                ],
  bootstrap:	[ AppComponent ]
})
 
export class AppModule { } 