import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asincrona23',
  templateUrl: './asincrona23.component.html',
  styleUrls: ['./asincrona23.component.css']
})
export class Asincrona23Component {

  num1: number = 0;
  num2: number= 0;

  mostrarSuma: boolean = false;
  mostrarResta: boolean = false;
  mostrarDividir: boolean = false;
  mostrarMultiplicar: boolean = false;

  resultadoSuma : boolean = false;
  resultadoResta: boolean = false;
  resultadoDividir: boolean = false;
  resultadoMultiplicar: boolean = false;



  constructor() { }

  calcular() {
    
    if(this.resultadoSuma){
      this.mostrarSuma = true;

    }else{
      this.mostrarSuma = false;
    }
    if(this.resultadoResta){
      this.mostrarResta = true;
  
    }else{
      this.mostrarResta = false;
    }
    if(this.resultadoMultiplicar){
      this.mostrarMultiplicar = true;
  
    }else{
      this.mostrarMultiplicar = false;
    }
    if(this.resultadoDividir){
      this.mostrarDividir = true;
  
    }else{
      this.mostrarDividir = false;
    }
    
  }



}

