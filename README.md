# Sliderm

![Test](https://github.com/terrylinooo/sliderm.js/actions/workflows/testing.yml/badge.svg) [![codecov](https://codecov.io/gh/terrylinooo/sliderm.js/branch/master/graph/badge.svg?token=poJlzJqTlq)](https://codecov.io/gh/terrylinooo/sliderm.js)

Sliderm is a slider and carousel JavaScript library that has only packed size is less than 19 KB.

This library is still under construction, please don't use it until the first release.

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

The HTML makup is required for intializing sliderm.

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

The detailed demonstrations will be put on the official documentation website: [sliderm.com](sliderm.com).

## License

Author: [Terry L.](https://terryl.in/)
Sliderm's license in under ***MIT***, you can do anything you want on using this JavaScript library.
