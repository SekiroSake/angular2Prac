import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    //_el: ElementRef; old way to declare private var

    constructor(private el: ElementRef, private renderer: Renderer) {
        //this._el = el; old way to declare private var
    }
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120')
    }
}
