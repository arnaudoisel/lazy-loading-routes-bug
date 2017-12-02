import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy',
  template: `lazy loaded !`
})

export class LazyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
