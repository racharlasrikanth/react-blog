import React, { useContext, useReducer } from 'react';
import reducer from "./../reducers/create_blog_reducer";
import { navigateToTop } from "./../utils/helper";
import { CHANGE_BLOG_DATA, CHANGE_BLOG_NAME, CHANGE_BLOG_TECHNOLOGY, HIDE_POPUP, SHOW_POPUP, SUBMIT_BLOG_DATA } from '../actions/actions';

const initialState = {
    blogTechnology:"",
    blogTitle:"",
    blogData:"",
    popupVisibility:false,
}

const CreateBlogContext = React.createContext();

export const CreateBlogProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const changeBlogTechnology = (newName) => {
        console.log(newName);
        dispatch({ type:CHANGE_BLOG_TECHNOLOGY, payload:newName })
    }

    const changeBlogTitle = (newName) => {
        dispatch({ type:CHANGE_BLOG_NAME, payload:newName })
    }

    const changeBlogData = (data) => {
        dispatch({ type:CHANGE_BLOG_DATA, payload:data })
    }

    const submitBlog = (e) => {
        console.log(e);
        // let data = ''

        navigateToTop()
        dispatch({ type:SHOW_POPUP })
        // dispatch({ type:SUBMIT_BLOG_DATA, payload:data })
    }

    // popup
    const showPopup = () => {
        dispatch({ type:SHOW_POPUP })
    }

    const hidePopup = () => {
        dispatch({ type:HIDE_POPUP })
    }

    return <CreateBlogContext.Provider value={{...state, changeBlogTechnology, changeBlogTitle, changeBlogData, submitBlog, showPopup, hidePopup }}>
        {children}
    </CreateBlogContext.Provider>
}

// make sure export these useHook
export const useCreateBlogContext = () => {
    return useContext(CreateBlogContext)
};