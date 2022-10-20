const setProduct: string = "SET_PRODUCT";

const defaultState = {
    items: [],
    isFetching: true,
}

export default function reposReducer(state = defaultState, action: any) {
    switch (action.type) {
        case setProduct:
            return {
                ...state,
                items: action.payload.items
            }
        default:
            return state
    }
}

export const setProucts = (product: any) => ({type:setProduct, payload:product})