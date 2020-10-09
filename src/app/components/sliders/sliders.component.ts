import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
declare var noUiSlider: any;
@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit, AfterViewInit {
  @Output() vector: EventEmitter<any[]> = new EventEmitter<any[]>();
  items
  constructor() { }
  ngOnInit() {
    this.items = Array(512).fill(1).map((x, i) => i);
  }
  ngAfterViewInit() {
    for (let index = 0; index < this.items.length; index++) {
      let slider = document.getElementById('sliderRegular' + index);
      noUiSlider.create(slider, {
        start: 0,
        connect: [true, false],
        range: {
          min: -1,
          max: 1
        },
        step: 0.0001,
        tooltips: [true],
      });
    }
    let all = document.getElementById('slideAll');
    noUiSlider.create(all, {
      start: 0,
      connect: [true, false],
      range: {
        min: -1,
        max: 1
      },
      step: 0.0001,
      tooltips: [true],
    });
  }
  onChange(slideAll) {
    let values = []
    let all = document.getElementById('slideAll') as noUislider.Instance;
    for (let index = 0; index < this.items.length; index++) {
      var slider = document.getElementById('sliderRegular' + index) as noUislider.Instance;
      if (slideAll) {
        slider.noUiSlider.set(all.noUiSlider.get());
      }
      values.push(slider.noUiSlider.get());
    }
    this.vector.emit(values)
  }

}
