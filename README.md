# Lean canvas flexible template

## Quick start

After a classic installation :

```bash
$ meteor add pntbr:meteor-lean-canvas
```
You can insert the canvas in your own template :

```html
<template name="my_canvas">
  {{> canvas}}
</template>
```
Now to personalize your data create a file in client side :

```bash
/client/canvas.js
```
and overwrite or complete the datas :

```js
// rewrite title in french
canvas['2'].title = "Problèmes";
canvas['4'].title = "Solutions";
canvas['3'].title = "La promesse";
```
or

```js
// add list in problems zone
  canvas['2'].list.push({
    title: 'Atomic accident',
    slug: 'http://scopyleft.fr'
  });
```

Don't forget the tricks
```js
// reactive force - to reload the canvas
Session.set('canvas-list', Math.random());
```
## Future

This is the v0.0.1, if you play with this module, I can do much better.

## Contact

Stéphane > http://scopyleft.fr
