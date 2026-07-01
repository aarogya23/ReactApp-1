const initialData = {
    count:0
}

const counterReducer = (state = initialData, action) => {
   //action: {type:'....'}
    switch(action.type){
        case "INCREASE":
            return {count: state.count + 1}

        case "DECREASE":
            return {count: state.count - 1}

            case "RESET":
            return {count: 0}

        default:
            return state

    }
    return state
}

export default counterReducer
