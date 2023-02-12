export function setBackgroundColorOfClass(classForEvent: HTMLCollectionOf<Element>, 
                                          event: string, 
                                          backgroundColor: string,
                                          classForEffect?: HTMLCollectionOf<Element>) {

    Array.from(classForEvent).forEach((elementForEvent, i) => {
        elementForEvent.addEventListener(event, () => {
            // case: use effect on different element
            
            if (classForEffect) {
                (classForEffect[i] as HTMLElement).style.backgroundColor = backgroundColor;

            // case: use effect on same element
            } else 
                (elementForEvent as HTMLElement).style.backgroundColor = backgroundColor;
        }
    )})
}


export function setDisplayOfClass(classForEvent: HTMLCollectionOf<Element>, 
                                  event: string, 
                                  display: string,
                                  classForEffect?: HTMLCollectionOf<Element>) {
    
    Array.from(classForEvent).forEach((elementForEvent, i) => {
        elementForEvent.addEventListener(event, () => {
            // case: use effect on different element
            if (classForEffect) {
                (classForEffect[i] as HTMLElement).style.display = display;

            // case: use effect on same element
            } else 
                (elementForEvent as HTMLElement).style.display = display;
        })
    })
}