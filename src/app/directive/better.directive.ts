import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[mybox]',
})

export class BetterDirective  {

  constructor(private el: ElementRef) { }

    @Input() defaultColor: string;

    // tslint:disable-next-line:no-input-rename
    @Input('mybox') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
      this.applyColor(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.applyColor(null);
    }

    private applyColor(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
