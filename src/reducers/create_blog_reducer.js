import { CHANGE_BLOG_DATA, CHANGE_BLOG_NAME, CHANGE_BLOG_TECHNOLOGY, HIDE_POPUP, SHOW_POPUP } from "../actions/actions";

const createBlogReducer = (state, action) => {

    if(action.type === CHANGE_BLOG_TECHNOLOGY){
        return {
            ...state,
            blogTechnology: action.payload,
        }
    }
    
    if(action.type === CHANGE_BLOG_NAME){
        return {
            ...state,
            blogTitle: action.payload,
        }
    }

    if(action.type === CHANGE_BLOG_DATA){
        return {
            ...state,
            blogData: action.payload,
        }
    }

    // popup

    if(action.type === SHOW_POPUP){
        return {
            ...state,
            popupVisibility: true,
        }
    }

    if(action.type === HIDE_POPUP){
        return {
            ...state,
            popupVisibility: false,
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`);
}

export default createBlogReducer;