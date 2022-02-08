import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return <Wrapper>
        <div className="nav-container section-center">
            <Link to="/" className="logo-container">
                <img src="https://racharlasrikanth.netlify.app/static/media/logo.aa78497e534416d460cb8eac1661bee4.svg" alt="" />
            </Link>
            <div className="nav-links">
                <ul className="links">
                    <li className="each-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="each-link">
                        <Link to="/createblog">Create Blog</Link>
                    </li>
                </ul>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.nav`
    background: var(--clr-primary-10);
    min-height: 10vh;
    display: grid;
    place-items: center;
    width: 100%;

    .nav-container{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .logo-container{
        max-width: 70px;
        max-height: 70px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .nav-links .links{
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 1rem;

        a{
            color: var(--clr-primary-1);
            font-size: 1rem;
            transition: var(--transition);
            letter-spacing: var(--spacing);

            :hover{
                color: var(--clr-primary-3);
            }
        }
    }
`

export default Navbar;