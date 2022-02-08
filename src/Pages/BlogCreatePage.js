import React from 'react';
import styled from 'styled-components';
import BlogDetails from '../components/BlogDetails';
import RichTextEditor from '../components/RichTextEditor';
import SubmitButton from '../components/SubmitButton';
import Popup from "./../components/Popup";

// imprting context
import { useCreateBlogContext } from '../context/create_blog_context';

const BlogCreatePage = () => {

    const { submitBlog, popupVisibility, hidePopup } = useCreateBlogContext();

    return <Wrapper>
        <div className="wrapper section section-center">
            <BlogDetails />
            <RichTextEditor />
            <SubmitButton name='submit blog' handleSubmit={submitBlog}/>
        </div>
        {popupVisibility && <Popup popupHandler={hidePopup} />}
    </Wrapper>
}

const Wrapper = styled.main`
    .wrapper{
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`

export default BlogCreatePage;