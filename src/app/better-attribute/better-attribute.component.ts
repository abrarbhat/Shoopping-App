import { Component, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: '[app-better-attribute]',
  templateUrl: './better-attribute.component.html',
  styleUrls: ['./better-attribute.component.css']
})
export class BetterAttributeComponent implements OnInit {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit() {
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'blue');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color' , 'yellow');
  }

}
