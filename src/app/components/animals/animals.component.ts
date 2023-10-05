import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit{
    title = 'Animales';

    ngOnInit(): void {
        console.log('Animals working');
        
    }
}
