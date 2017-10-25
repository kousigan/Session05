import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive ({
    selector: '[asidecolor]'
})

export class AsideDirective{
    constructor( private el: ElementRef) {}

    @Input() myColor: string;

    @Input('asidecolor') mynewColor: string;

  

    @HostListener ('mouseenter') onmouseenter(){
        this.applyColor(this.mynewColor || this.myColor );
    }
    @HostListener ('mouseleave') onmouseleave(){
        this.applyColor(null );
    }

    private applyColor(color: string){
        this.el.nativeElement.style.backgroundColor = color;
    }

}
