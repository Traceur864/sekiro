import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  
  public title = "Edwin Carpio";
  public subtitle = "Desarrollador Web y Movil";
  public email= "twinsanity864@hotmail.com";

  contructor(){
  }

  ngOnInit(){

  }

}
