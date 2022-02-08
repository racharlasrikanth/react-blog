import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({name='submit', handleSubmit}) => {
    return <Wrapper onClick={handleSubmit}>
        {name}
    </Wrapper>
}

const Wrapper = styled.button`
    color: var(--clr-primary-10);
    padding: .5rem .7rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    text-transform: capitalize;
    background: var(--clr-primary-5);
    border: 2px solid var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);

    :hover{
        color: var(--clr-primary-3);
        background: var(--clr-primary-8);
    }
`

export default SubmitButton;
