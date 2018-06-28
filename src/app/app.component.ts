import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  area: number;
  base: number;
  altura: number;
  radio:number;
  lado:number;
 

  resultado: number;
  resultado1: number;
  resultado2: number;
  resultado3: number;
  resultado4: number;
  base1:number;



  AreaTriangulo() {
    this.resultado = (this.base * this.altura)/2; {      
    }
  }

  AreaCuadrado() {
    this.resultado1 = (Math.pow(this.lado,2) * Math.pow(this.lado,2)); {      
    }
  }

  AreaRectangulo() {
    this.resultado2 = (this.base * this.altura)/2; {      
    }
  }

  AreaCirculo() {
    this.resultado3 = Math.PI * Math.pow(this.radio,2); {      
    }
  }

  AreaTrapecio() {
    this.resultado4 = (this.base + this.base1 * this.altura/2); {      
    }
  }


}
