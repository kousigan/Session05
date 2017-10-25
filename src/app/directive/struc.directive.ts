import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[strucdir]'
})

export class StrucDirective {

    constructor(
        private el:ElementRef,
        private ren:Renderer2
    ){}
     
    ngOnInit(){
        this.ren.setStyle(this.el.nativeElement, 'color', 'purple');
        this.ren.addClass(this.el.nativeElement, 'class1');
    }
}