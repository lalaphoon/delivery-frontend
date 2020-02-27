const counterReducer = (state = {a : 1, b : 10}, action) => {
    if(action.type === 'add'){
        return {
            a: state.a + 1
        }
    }else if(action.type === 'minus'){
        return {
            a: state.a - 1
        }
    }else if(action.type === 'multiply'){
        return {
            a: state.a * 2
        }
    }else if(action.type === 'any'){
        console.log(action)
        return {
            a: state.a + action.num
        }
    }
    return state;
}

export default counterReducer;
