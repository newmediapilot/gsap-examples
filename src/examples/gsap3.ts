import gsap from 'gsap';
import './gsap3.css';
import {createSection} from './create';

const dom = createSection('gsap3',
    `
        <h1>
            GSAP Animation Examples
        </h1>
        <p>
            Some interesting effects and motion sequences.
        </p>
    `);

gsap.fromTo([
    dom.querySelector('h1'),
    dom.querySelector('p')
], {
    y: "50",
    autoAlpha: 0,
}, {
    y: "0vh",
    autoAlpha: 1,
    stagger: .35,
    duration: 1,
});