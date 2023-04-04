/* tslint:disable:no-unused-variable */
// import { TestBed, async } from '@angular/core/testing';
import { ChipUpperCasedPipe } from './uppercase.pipe';

describe('Pipe: Uppercased', () => {
  it('create an instance', () => {
    let upperCasedPipe = new ChipUpperCasedPipe();
    expect(upperCasedPipe).toBeTruthy();
  });
  it('should return any string as uppercase', () => {
    let upperCasedPipe = new ChipUpperCasedPipe();
    let chipLabel: string = 'Mike'.toUpperCase();
    expect(upperCasedPipe.transform(chipLabel)).toEqual(chipLabel);
  });
});
