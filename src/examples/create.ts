export const createSection = (label: string, html: string) => {
    const section = document.createElement('section');
    const article = document.createElement('article');
    section.classList.add(label);
    article.innerHTML = html;
    section.appendChild(article);
    document.body.appendChild(section);
    console.log('createSection:: ', section);
    return section;
};