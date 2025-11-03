export const createSection = (label: string, html: string) => {
    const section = document.createElement('section');
    const slot = document.createElement('slot');
    const article = document.createElement('article');
    section.classList.add(label);
    article.innerHTML = html;
    section.appendChild(slot);
    slot.appendChild(article);
    document.querySelector('main').appendChild(section);
    console.log('createSection:: ', section);
    return section;
};