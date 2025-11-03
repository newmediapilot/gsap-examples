import gsap from 'gsap';
import {createSection} from './create';
import {textSplit} from './TextSplit.ts';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const dom = createSection('gsap1',
    `
        <h1>
            GSAP Animation Examples
        </h1>
        <p>
            Testing motion effects
        </p>
    `);

gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline();
timeline.timeScale(1.5);

const h1words = textSplit(dom.querySelector('h1'), ' ');

timeline.fromTo(h1words[0], {
    y: "-50vh",
    autoAlpha: 0,
}, {
    y: "0vh",
    autoAlpha: 1,
    duration: 2
}, "-=.25");

const h1words2split = textSplit(h1words[1], "");

timeline.fromTo(h1words2split, {
    y: "50",
    autoAlpha: 0,
}, {
    y: "0vh",
    autoAlpha: 1,
    duration: .333,
    stagger: .111,
}, "-=.25");

timeline.fromTo(h1words[2], {
    y: "50",
    autoAlpha: 0,
}, {
    y: "0vh",
    autoAlpha: 1,
    duration: 1,
}, "-=.1");

const pSplit = textSplit(dom.querySelector('p'), "");

timeline.fromTo(pSplit, {
    y: "100px",
}, {
    y: "0px",
    duration: 1,
    stagger: .025,
    ease: "back.out(1.7)"
});

const scrollTrigger = {
    trigger: dom,
    start: "top 100%",
    end: "top 0%",
    scrub: true,
    markers: true,
}

const tl = gsap.timeline({});

tl.fromTo(
    dom.querySelector('article'),
    {
        borderRadius: 0,
        scale: 1,
    },
    {
        borderRadius: 100,
        scale: 0.75,
        duration: 1,
        scrollTrigger:{
            ...scrollTrigger,
            start: "top 00%",
            end: "top -100%",
        }
    }
);

tl.fromTo(
    dom.querySelector('article'),
    {
        y:"0vh",
    },
    {
        y:"-25vh",
        duration: 1,
        scrollTrigger:{
            ...scrollTrigger,
            start: "top 0%",
            end: "top -100%",
        }
    }
);