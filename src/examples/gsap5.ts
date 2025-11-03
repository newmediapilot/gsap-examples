import gsap from 'gsap';
import {createSection} from './create';

const dom = createSection('gsap5',
    `
        <h1>
            GSAP Animation Examples
        </h1>
        <p>
            Testing motion effects
        </p>
    `);


const timeline = gsap.timeline({
    repeat:-1,
});

timeline.timeScale(1.5);

timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #06cdf0, #81056b)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #ff6b6b, #5f27cd)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #1dd1a1, #feca57)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #48dbfb, #ff9ff3)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #54a0ff, #ff6b6b)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #00d2d3, #ee5253)', duration:3})
timeline.to(dom.querySelector('article'), {background:'linear-gradient(to right, #06cdf0, #81056b)', duration:3})

