# gsap-examples

GSAP (GreenSock Animation Platform) was created by Jack Doyle around 2008 to provide smooth, 
high-performance animations for Flash. 

When Flash declined, GSAP was rewritten in JavaScript (2012), 
quickly becoming the industry standard for web animation.

#### GSAP features:
- Scrub animating
- Timeline composition
- CSS/JS property animation
- Bespoke property transitions
- Scattering, bouncing, 3D transforms
- No limits but what you can imagine (and time)

#### About this layout

This layout uses a sticky scrub, which is a specific way
of defining containers and elements to provide an easy
timeline scrub context.

It consists of:
- Container (`height:auto`)
- Scrub (`height:>100vh`)
- Content (`position:sticky`)

```
+-------------------- .container -------------------+
|          +---------- .scrub ----------+           |
|          |  +--------------------+    |           |
|          |  |      .content      |    |           |
|          |  +--------------------+    |           |
|          +----------------------------+           |
|          +---------- .scrub ----------+           |
|          |  +--------------------+    |           |
|          |  |      .content      |    |           |
|          |  +--------------------+    |           |
|          +----------------------------+           |
+---------------------------------------------------+
```

As the `.container` element scrolls, the `.content` element will get picked up by 
`.scrub` as part of the `sticky` positioning.

We use `.scrub` as our `trigger` reference, because it is taller than `100vh`
we can use the overlap to scrub the elemnets inside `.content`;

### Live demo:

https://newmediapilot.github.io/gsap-examples/

### Development:

```
npm i
npm run start
```

### Deployment

```
npm run deploy
```
