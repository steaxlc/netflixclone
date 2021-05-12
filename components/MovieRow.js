import React, {useState} from 'react'
import styled from 'styled-components'
import { imagePath } from '../util/api'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);
    const leftArrowHandler = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const rightArrowHandler = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.length * 175;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    }

    return (
        <StyledMovieRow>
            <h2>{title}</h2>
            <div className="left" onClick={leftArrowHandler}>
                <IoIosArrowBack style={{ fontSize: 50 }}/>
            </div>
            <div className="right"  onClick={rightArrowHandler}>
                <IoIosArrowForward  style={{fontSize: 50}}/>
            </div>
            <ListArea>
                <List style={{
                    marginLeft: scrollX,
                    width: items.length * 175
                }}>
                    {items.length > 0 && items.map((movie, key) => (
                        <Item key={key}>
                            <img  src={`${imagePath}${movie.poster_path}`}  alt={movie.original_name } />
                        </Item>
                    ))}
                </List>
            </ListArea>
        </StyledMovieRow>
    )
}

const List = styled.div`
    transition: all ease 0.5s;
`;
 
const Item = styled.div`
    cursor: pointer;
    display: inline-block;
    width: 175px;
    img{
        width: 100%;
        transform: scale(0.9);
        transition: all 0.2s ease-in-out;
        :hover{
            transform: scale(1);
        }
    }
`;

const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

const StyledMovieRow = styled.div`
    margin-bottom: 30px;
    h2{
        margin: 0px 0px 0px 30px;
    }
    .left, .right{
        cursor: pointer;
        position: absolute;
        width: 40px;
        height: 265px; 
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,.6);
        transition: all ease 0.3s;
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
    @media (max-width: 760px){
        .left, .right{
            opacity: 1;
        }
    }
    @media (min-width: 761px){
        .left, .right{
            opacity: 0;
        }
        :hover {
        .left, .right{
            opacity: 1;
        }
    }
    }
`;

export default MovieRow
