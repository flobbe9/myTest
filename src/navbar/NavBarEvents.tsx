

export function changeBackgroundColorOnMouseOver(navBarElements: HTMLCollectionOf<Element>, colorOver: string, colorOut: string): void {
    for (let element of navBarElements) {
        if (element instanceof HTMLElement) {
            // mouseover
            element.onmouseover = () => {
                if (element instanceof HTMLElement)
                    element.style.backgroundColor = colorOver;
            }

            // mouseout
            element.onmouseout = () => {
                if (element instanceof HTMLElement)
                    element.style.backgroundColor = colorOut;
            }
        }
    }
}


export function changeColorOnMouseOver(navBarElements: HTMLCollectionOf<Element>, colorOver: string, colorOut: string): void {
    for (let element of navBarElements) {
        if (element instanceof HTMLElement) {
            // mouseover
            element.onmouseover = () => {
                if (element instanceof HTMLElement)
                    element.style.color = colorOver;
            }

            // mouseout
            element.onmouseout = () => {
                if (element instanceof HTMLElement)
                    element.style.color = colorOut;
            }
        }
    }
}