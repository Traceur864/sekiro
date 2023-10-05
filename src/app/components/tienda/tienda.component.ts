import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{

  public titulo;
  public nombreDelParque: string | undefined;
  public miParque: any;

  constructor(){
    this.titulo = 'Tienda';
  }

  ngOnInit(): void {
      
  }

  mostrarNombre(){
    console.log(this.nombreDelParque); 
  }

  verDatosParque(event: any){
    console.log(event);
    this.miParque = event;
  }
}
