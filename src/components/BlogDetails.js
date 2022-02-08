import React from 'react';
import styled from 'styled-components';

// importing context
import { useCreateBlogContext } from '../context/create_blog_context';

const BlogDetails = () => {

    // fetch values from context
    const {blogTechnology, blogTitle, changeBlogTechnology, changeBlogTitle} = useCreateBlogContext();

    return <Wrapper>
        <div className="blog-create-center section-center">
            <div className="form-control">
                <label htmlFor="technology">Select Technology</label>
                <select name="technology" id="technology" value={blogTechnology} onChange={(e) => changeBlogTechnology(e.target.value)}>
                    <option value="java">java</option>
                    <option value="react">react</option>
                    <option value="javascript">javascript</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="blogName">Blog Name</label>
                <input type="text" name="blogName" id="blogName" placeholder='enter your blog name' value={blogTitle} onChange={(e) => changeBlogTitle(e.target.value)}/>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    .blog-create-center{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
    }
    .form-control{
        display: grid;
        grid-template-columns: 1fr;
        gap: .5rem;

        input, select{
            font-size: 1rem;
            padding: .354rem .7rem;
        }
    }
    
    @media (min-width:768px){
        .form-control{
            display: grid;
            grid-template-columns: 200px 1fr;
            column-gap: 6rem;
        }
    }

`

export default BlogDetails;
