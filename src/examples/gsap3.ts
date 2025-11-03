import gsap from 'gsap';
import {createSection} from './create';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const dom = createSection('gsap3',
    `
        <h1>
            Animated Background Gradient
        </h1>
    `);

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({});

const scrollTrigger = {
    trigger: dom,
    start: "top 100%",
    end: "top -100%",
    scrub: true,
    markers: true,
}

tl.fromTo(
    dom.querySelector('article'),
    {
        background: 'linear-gradient(to right,#6d1fb6,#5bcd7a)',
    },
    {
        background: 'linear-gradient(to right,#ff7525,#59186e)',
        scrollTrigger: {
            ...scrollTrigger,
            start: "top 0%",
            end: "top -25%",
        }
    }
);

tl.fromTo(
    dom.querySelector('article'),
    {
        borderRadius: 0,
        scale: 1
    },
    {
        borderRadius: 100,
        scale: 0.75,
        ease: 'power1.in',
        scrollTrigger: {
            ...scrollTrigger,
            start: "top 0%",
            end: "top -25%",
        }
    }
);