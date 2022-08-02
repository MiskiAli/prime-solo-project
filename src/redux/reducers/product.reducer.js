
const productReducer= (state=[], action)=>{
    switch(action.type) {
        case 'RENDER_PRODUCT':
            console.log('Rendering products are:', action.payload)
            return action.payload;
            default:
                return state
    }
};

export default productReducer;