import { Component, OnInit } from '@angular/core';
import { fundido } from '../animations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fundido]
})
export class HomeComponent implements OnInit{
  title = 'Bienvenido a NGZOO';

  ngOnInit(): void {
      console.log('cargado');
      
  }

}
