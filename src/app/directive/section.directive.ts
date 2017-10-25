import { Directive, ElementRef,  Renderer2,Input } from '@angular/core';

@Directive({
    selector: '[mysection]'
})

export class SectionDirective {

    constructor(private el: ElementRef,private renderer: Renderer2 ) {}

    ngOnInit(){
       this.usingRenderer();
    }

    @Input() updateValue:string;
    @Input() insertText:string;
    private usingRenderer(){
        this.renderer.setStyle(this.el.nativeElement,'padding',this.updateValue);
         this.renderer.addClass(this.el.nativeElement, 'even');
        
        const div = this.renderer.createElement('div');
        const text = this.renderer.createText(this.insertText);
      
        this.renderer.appendChild(div, text);
        this.renderer.appendChild(this.el.nativeElement, div);
    }
}
