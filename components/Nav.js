import React from 'react'
import styled from 'styled-components'

const Nav = ({black}) => {
    return (
        <StyledNav black={black}>
            <Logo>
                <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix" /></a>
            </Logo>
            <User>
                <a href="#"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="user" /></a>
            </User>
        </StyledNav>
    )
}

const User = styled.div`
    img{
        height: 100%;
        border-radius: 5px;
    }
    height: 50px;
`;

const Logo = styled.div`
    img{
        height: 100%;
    }
    height: 30px;
`;

const StyledNav = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding: 0px 32px;
    ${props => props.black ? `background-color: #141414` : `background: transparent`};
    transition: all ease 0.8s;
`;

export default Nav
