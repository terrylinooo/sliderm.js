# Sliderm

Sliderm is a slider and carousel JavaScript library that has only packed size less than 12 KB.


## Getting started

Install

```
npm install sliderm
```

CSS

```html
<link rel="stylesheet" href="node_modules/sliderm/dist/css/sliderm.css">
```

JS
```html
<script src="node_modules/sliderm/dist/js/sliderm.js"></script>
```

## Examples

```javascript
 const sliderm = new Sliderm('.sliderm', {
    previousNext: true,
    pagination: true,
    grouping: false,
    loop: true,
    preview: false,
    edge: 40,
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
