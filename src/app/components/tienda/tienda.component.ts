import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border:'5px solid yellow',
        background: 'red',
        borderRadius: '50px'
      })),
      transition('inactive => active', animate('3s linear')),
      transition('active => inactive', animate('3s linear'))
    ])
  ]
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
