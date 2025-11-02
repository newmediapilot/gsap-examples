import gsap from 'gsap';
import './gsap1.css';
import {createSection} from './create';
import {textSplit} from './TextSplit.ts';

const dom = createSection('gsap1',
    `
        <h1>
            GSAP Animation Examples
        </h1>
        <p>
            Some interesting effects and motion sequences.
        </p>
    `);

const h1words = textSplit(dom.querySelector('h1'), ' ');

const timeline = gsap.timeline();
timeline.timeScale(1.5);

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
}, "-=.25");

const pSplit = textSplit(dom.querySelector('p'), "");

timeline.fromTo(pSplit, {
    y: "50",
}, {
    y: "0vh",
    duration: 1,
    stagger: .025,
    ease: "back.out(1.7)"
});