# gsap-examples

GSAP (GreenSock Animation Platform) was created by Jack Doyle around 2008 to provide smooth, 
high-performance animations for Flash. 

When Flash declined, GSAP was rewritten in JavaScript (2012), 
quickly becoming the industry standard for web animation.

#### GSAP boasts some important and useful features:
- Scrub animating
- Timeline animations
- CSS/JS property animatin
- Bespoke property animations (such as a 3D model)

#### About this layout

This layout uses a sticky scrub, which is a specific way
of defining containers and elements to provide an easy
timeline scrub context.

It consists of:
- Container (`height:auto`)
- Scrub (`height:>100vh`)
- Content (`position:sticky`)

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
