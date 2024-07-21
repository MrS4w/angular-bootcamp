import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true,
})
export class ConvertPipe implements PipeTransform {
  transform(value: number, targetUnits: string): number {
    const KILOMETERS = 1.60934;

    if (!value) {
      return 0;
    }

    switch (targetUnits) {
      case 'km':
        return value * KILOMETERS;
      case 'm':
        return value * KILOMETERS * 1000;
      case 'cm':
        return value * 1000 * 1000 * KILOMETERS;
      default:
        throw new Error('Target unit not supported!');
    }
  }
}
