
import { Directive, ElementRef, OnInit, Renderer2 , HostListener, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[basicDirective]',
})
export class BasicDirective implements OnInit {

    // tslint:disable-next-line:no-input-rename
    @Input( 'basicDirective') color: string;

    constructor(private el: ElementRef, private ren: Renderer2) {

    }

    ngOnInit() {
 //        this.el.nativeElement.style.backgroundColor = 'green';

    }

    @HostListener ('mouseenter') onmouseenter() {
        this.applyBasic(this.color || 'cyan' );
    }
    @HostListener ('mouseleave') onmouseleave() {
        this.applyBasic(null);
    }
    applyBasic(color) {
        this.ren.setStyle(this.el.nativeElement, 'color', color );
    }

}

