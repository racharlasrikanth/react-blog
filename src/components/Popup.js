import React from 'react';
import styled from 'styled-components';

const Popup = ({ text, popupHandler }) => {
    return <Wrapper>
        <div className="popup-container">
            <div className="popup">
                <h3>{text || "successfully submited"}</h3>
                <button onClick={popupHandler}>close</button>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.article`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 10;

    ::before{
        content: '';
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        /* background: var(--clr-black); */
        background: red;
        opacity: 1;
    }

    .popup-container{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        /* height: 200px; */
        background: var(--clr-white);
        box-shadow: var(--dark-shadow);
        padding: 3rem 1rem;
        border-radius: var(--radius);
        text-align: center;

        button{
            color: var(--clr-primary-10);
            padding: .3rem .7rem;
            letter-spacing: var(--spacing);
            display: inline-block;
            text-transform: capitalize;
            background: var(--clr-primary-5);
            border: 2px solid var(--clr-primary-5);
            cursor: pointer;
            transition: var(--transition);
            margin-top: 1.7rem;

            :hover{
                color: var(--clr-primary-3);
                background: var(--clr-primary-8);
            }
        }
    }

    @media (min-width: 768px){
        .popup-container{
            width: 400px;
        }
    }
`

export default Popup;
