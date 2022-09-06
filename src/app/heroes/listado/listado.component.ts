import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  heroes: string[] = ['Ironman', 'Batman', 'Goku' , 'Vegeta', 'Thor']

  heroeBorrado: string = '';  
  // heroeBorrado :string | undefined = '';


 borrarHeroe(){
  // console.log('borrando...');
   this.heroeBorrado = this.heroes.shift() || '';
  // this.heroeBorrado = this.heroes.shift();

  console.log(this.heroeBorrado);
 }

}
