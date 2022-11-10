# ![Sliderm - Slider and Carousel JavaScript Library](https://i.imgur.com/C5fGYJ5.png)

![Test](https://github.com/terrylinooo/sliderm.js/actions/workflows/testing.yml/badge.svg) [![codecov](https://codecov.io/gh/terrylinooo/sliderm.js/branch/master/graph/badge.svg?token=poJlzJqTlq)](https://codecov.io/gh/terrylinooo/sliderm.js) [![DeepScan grade](https://deepscan.io/api/teams/19398/projects/22800/branches/678024/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=19398&pid=22800&bid=678024)


Sliderm is a slider & carousel JavaScript library. The packed size of `sliderm.js` is less than 19 KB, lightweight but feature-rich.

- Dependency-free.
- Code quality check passed and fully tested with 100% coverage rate.
- Flexible, easy to extend by writing your own extensions.

## Documentaion

- Website: https://sliderm.com
- Demo: https://sliderm.com/demo
- Try it yourself: [JSFiddle](https://jsfiddle.net/terrylinooo/z8j0cLop/) / [CodePen](https://codepen.io/terrylinooo/pen/eYKvpNZ)

## Features

![Slider DEMO](https://i.imgur.com/TZdRQVb.gifg)

- Design for mobile devices:
    - Multiple breakpoints.
    - Touch to swipe.
    - Preview the edge of the previous and next slide items.
- Autoplay.
- Infinite loop.
- Slide grouping items or single one.
- and more... check out [configuration options](https://sliderm.com/docs/options) for more details.

## Getting started

Install

```
npm install sliderm
```

Import

```
import Sliderm from 'sliderm';
import 'sliderm/src/assets/scss/index.scss';
```

## Examples

The HTML makeup is required for intializing sliderm.

#### HTML

```html
<div class="sliderm your-class-name">
  <div class="sliderm__slider">
    <div class="sliderm__slides">
        <div class="sliderm__slide"><img src="./demo/1.jpg" /></div>
        <div class="sliderm__slide"><img src="./demo/2.jpg" /></div>
        <div class="sliderm__slide"><img src="./demo/3.jpg" /></div>
        <div class="sliderm__slide"><img src="./demo/4.jpg" /></div>
        <div class="sliderm__slide"><img src="./demo/5.jpg" /></div>
    </div>
  </div>
</div>
```

#### JavaScript

```javascript
const sliderm = new Sliderm('.your-class-name', {
  arrow: true,
  pagination: true,
  grouping: false,
  loop: true,
  preview: false,
  columns: 4,
  duration: 1000,
  spacing: 10,
  align: 'center',
});

sliderm.on('slide.start', () => {
  console.log('Just starting to slide!');
});

sliderm.on('slide.end', () => {
  console.log('The slider is stopped.');
});
```

The detailed demonstrations will be put on the official documentation website.

## License

Author: [Terry L.](https://terryl.in/)
Sliderm's license in under ***MIT***, you can do anything you want on using this JavaScript library.
