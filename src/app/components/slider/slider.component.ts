import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() anchura: number | undefined;
  @Input('etiquetas') captions: boolean | undefined;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor(){
    this.autor = {
      nombre: 'Edwin Carpio',
      website: 'edwin@carpio.com',
      facebook: 'Edwin Lopez'
    };
  }

  ngOnInit(): void {
    $(".logo").on("click", function (e: any) {
      e.preventDefault();
      $("header").css("background", "green")
        .css("height", "50px")
    });
 
 
    (<any>$('.bxslider')).bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager: true,
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  lanzar(){
    this.conseguirAutor.emit(this.autor);
  }

}
