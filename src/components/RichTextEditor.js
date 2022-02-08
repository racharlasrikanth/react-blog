import React from 'react';
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// importing context
import { useCreateBlogContext } from '../context/create_blog_context';

const RichTextEditor = () => {

    // fetch data from context
    const { changeBlogData,blogData } = useCreateBlogContext();

    return <Wrapper className='text-editor-container'>
        <div className="text-editor-center section-center">
            <CKEditor 
                className="cke-editor"
                editor={ClassicEditor}
                data={blogData}
                onChange={(event, editor) => {
                    let data = editor.getData();
                    changeBlogData(data)
                }}
            />
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
    .ck.ck-editor__main{
        .ck-content{
            min-height: 50vh;
        }
    }
`

export default RichTextEditor;