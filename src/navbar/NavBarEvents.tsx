export function setBackgroundColorOfClass(classElementsEvent: HTMLCollectionOf<Element>, 
                                          event: string, 
                                          backgroundColor: string,
                                          classElementsEffect?: HTMLCollectionOf<Element>) {

    Array.from(classElementsEvent).forEach((classElementEvent, i) => {
        classElementEvent.addEventListener(event, () => {
            // case: use effect on different element
            
            if (classElementsEffect) {
                (classElementsEffect[i] as HTMLElement).style.backgroundColor = backgroundColor;

            // case: use effect on same element
            } else 
                (classElementEvent as HTMLElement).style.backgroundColor = backgroundColor;
        }
    )})
}


export function setDisplayOfClass(classElementsEvent: HTMLCollectionOf<Element>, 
                                  event: string, 
                                  display: string,
                                  classElementsEffect?: HTMLCollectionOf<Element>) {
    
    Array.from(classElementsEvent).forEach((classElementEvent, i) => {
        classElementEvent.addEventListener(event, () => {
            // case: use effect on different element
            if (classElementsEffect) {
                (classElementsEffect[i] as HTMLElement).style.display = display;

            // case: use effect on same element
            } else 
                (classElementEvent as HTMLElement).style.display = display;
        })
    })
}