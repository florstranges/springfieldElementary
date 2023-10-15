import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTituloGrande]'
})
export class TituloGrandeDirective {

  constructor(private elemento: ElementRef) {
    elemento.nativeElement.style.fontSize = '20px';
  }

}
