# ScrollSpy v0.0.1

[![DevDependencies](http://img.shields.io/david/dev/makotot/scrollspy.svg?style=flat)](https://github.com/makotot/scrollspy)

> Scrollspy library.

## Usage

```html
<div id="js-scrollspy">
  <ul class="js-scrollspy-nav">
    <li><a href="#internal-link">internal-link</a></li>
    <li><a href="#...">...</a></li>
    <li><a href="#...">...</a></li>
    <li><a href="#...">...</a></li>
  </ul>
  ...
  <div>
    <div id="internal-content"></div>
    ...
  </div>
</div>
```

```js
var spy = new ScrollSpy('#js-scrollspy', {
  nav: '.js-scrollspy-nav > li > a',
  className: 'is-inview'
});
```


## License

MIT
