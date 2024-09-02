import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }

  possibleColors = [
    'darksalmon',
    'hotpink',
    'lightskyblue',
    'goldenrod',
    'peachpuff',
    'mediumspringgreen',
    'cornflowerblue',
    'blanchedalmond',
    'lightslategrey'
  ];

  
  @HostBinding('style.border-color') borderColor!: string;
  @HostBinding('style.background-color') bgColor!: string;


  @HostListener('click', ['$event.target']) onClick() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);

    this.bgColor = this.possibleColors[colorPick];
  }


}
