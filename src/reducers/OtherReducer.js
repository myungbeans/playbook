export default function otherReducer(state={}, { type, payload }){
    switch (type){
        case 'notDefault':
            return "does something"
        default:
            return state
    }
}