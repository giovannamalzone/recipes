import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
})
export class UppercaseDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.addEventListener('input', () => {
      let value: string = el.nativeElement.value;
      el.nativeElement.value = value.toUpperCase();
    });
  }
}
