/**
 * Splits a text element into `<span>` by `split` delimiter
 * @param element
 * @param split
 */
export const textSplit = (element: HTMLElement, split: string = ' ') => {
    const h1split = element.innerText
        .trim()
        .split(split)
        .map((text: string) => {
            if (text === ' ') return `<span>&nbsp;</span>`;
            return `<span>${text}</span>`;
        })
        .join(split);
    element.innerHTML = h1split;
    return element.querySelectorAll('span');
}