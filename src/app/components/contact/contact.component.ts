import { Component, OnInit, ViewChild} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public widthSlider: number=0;
  public anchuraToSlider: any;
  public captions: boolean;
  @ViewChild('textos') textos: any;

  constructor(){
    this.captions = false;
  }

  ngOnInit(): void {
    var opcion = document.querySelector('#texto')?.innerHTML;
    alert(opcion);
    console.log(this.textos);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(){
   
    
  }
}
