const reducer = (state , action) => {
    switch(action.type){
        case 'increment':
            return {count : state.count + 1}
        case 'decrement':
            return {count: state.count -1}
        default: 
            return state        
    }
}

export default reducer;