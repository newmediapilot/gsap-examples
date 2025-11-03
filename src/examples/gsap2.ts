import gsap from 'gsap';
import {createSection} from './create';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const dom = createSection('gsap2',
    `
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    `);

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({});

gsap.set(dom.querySelectorAll('div'), {
    width: "0%",
    height: "0%",
});

const scrollTrigger = {
    trigger: dom,
    start: "top 100%",
    end: "top 0%",
    scrub: true,
    markers: true,
}

tl.fromTo(
    dom.querySelectorAll('div'),
    {
        width: "0%",
        height: "0%",
    },
    {
        width: "100%",
        height: "100%",
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger
    }
);

tl.fromTo(
    dom.querySelectorAll('div'),
    {
        width: "100%",
        height: "100%",
    },
    {
        width: "0%",
        height: "0%",
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
            ...scrollTrigger,
            start: "top 0%",
            end: "top -100%",
        }
    }
);

tl.fromTo(
    dom.querySelector('article'),
    {
        borderRadius: 0,
        scale:1.0,
        y:"0vh",
    },
    {
        borderRadius: 1000,
        scale:0,
        y:"-50vh",
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
            ...scrollTrigger,
            start: "top -90%",
            end: "top -190%",
        }
    }
);