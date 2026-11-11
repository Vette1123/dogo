# Dogo

A four-by-four grid of tiles that assembles into an animated image of a dog,
then folds apart when you press the button.

**[Live demo →](https://vette1123.github.io/dogo/)**

## Stack

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
It is an `index.html`, a `style.css`, a `script.js` and an audio clip.

## The trick

The grid is generated in a nested loop. Sixteen divs, each given the *same*
background image and a computed offset:

```js
function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const boxEl = document.createElement('div')
      boxEl.classList.add('box')
      boxEl.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
      boxContainer.appendChild(boxEl)
    }
  }
}
```

That one `backgroundPosition` line is why sixteen separate boxes read as a
single continuous picture rather than sixteen copies of it. Each tile shows a
different 125px window onto the same 500px image. This is the same mechanism
as CSS sprites.

## The animation costs nothing

Pressing the button toggles **one class on the container**, not on each tile:

```js
btn.addEventListener('click', () => {
  boxContainer.classList.toggle('big')
})
```

Everything else lives in CSS under that class: a scale, a 360-degree rotation
and a `skewY`, with a single transition governing the timing. One class toggle
animates all sixteen elements, with no per-element JavaScript.

I built it to find out how far plain CSS transforms go before an animation
library is needed.

## Known limitations

- **The audio plays on a three-second timer after load**, not on interaction.
  Browsers block autoplay until the user has interacted with the page, so it
  usually will not fire on a first visit. Moving it onto the button click
  would make it reliable.
- **The image is hotlinked** from a remote GIF host rather than committed, so
  the demo breaks if that URL ever moves.
- **The 125px tile size is hardcoded** to match a 500px image; the grid does
  not adapt to a different source or a smaller viewport.
- **No `prefers-reduced-motion` branch** for a full-screen spin.

## Running locally

```bash
git clone https://github.com/Vette1123/dogo.git
cd dogo
# open index.html — no build, no server needed
```

---

Built by [Mohamed Gado](https://mohamedgado.com)
