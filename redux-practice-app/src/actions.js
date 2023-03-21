export const IncrementAction = () => async dispatchEvent =>{
    dispatchEvent({
        type:"INCREMENT"
    })
}

export const DecrementAction = () => async dispatchEvent =>{
    dispatchEvent({
        type:"DECREMENT"
    })
}