import gsap from 'gsap';
import {createSection} from './create';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const dom = createSection('gsap4',
    `
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
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
        background: 'linear-gradient(to right,#14709c,#ad3123)',
    },
    {
        background: 'linear-gradient(to right,#3ae7f7,#540168)',
        scrollTrigger: {
            ...scrollTrigger,
            start: "top 0%",
            end: "top -25%",
        }
    }
);

const railTop = gsap.timeline({})

railTop.fromTo(dom.querySelectorAll('ul')[0], {
    x: "0vw"
}, {
    x: "-100vw",
    duration: 10,
    repeat: -1,
    yoyo: true,
});
const railBot = gsap.timeline({})
railBot.fromTo(dom.querySelectorAll('ul')[1], {
    x: "-100vw"
}, {
    x: "vw",
    duration: 10,
    repeat: -1,
    yoyo: true,
});

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


tl.fromTo(
    [
        ...dom.querySelectorAll('ul')
    ],
    {
        y: "0vh",
    },
    {
        y: "-50vh",
        ease: 'power1.in',
        stagger: .1,
        duration: 1,
        scrollTrigger: {
            ...scrollTrigger,
            start: "top -50%",
            end: "top -150%",
        }
    }
);