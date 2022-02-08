import React, { useState } from 'react';
import styled from 'styled-components';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = () => {

    const [textEditorData, setTextEditorData] = useState('');

    return <Wrapper className='text-editor-container section'>
        <div className="text-editor-center section-center">
            <CKEditor 
                editor={ClassicEditor}
                data={textEditorData}
                onChange={(event, editor) => {
                    let data = editor.getData();
                    setTextEditorData(data);
                }}
            />
        </div>
    </Wrapper>
}

const Wrapper = styled.section`

`

export default RichTextEditor;