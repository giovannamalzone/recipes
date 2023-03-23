import { UppercaseDirective } from './uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(null);
    const directive = new UppercaseDirective(el);
    expect(directive).toBeTruthy();
  });
});
