import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[errSrc]'
})
export class ErrSrcDirective {
  @Input() private errSrc:string;

  @HostListener('error', ['$event.target']) public onError(img): void {
    img.src = this.errSrc;
  }
}
