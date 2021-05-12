import React from 'react'
import styled from 'styled-components'
import { coverImagePath } from '../util/api'
import { FaPlay } from 'react-icons/fa'
import { AiOutlineInfoCircle } from "react-icons/ai";

const FeaturedMovie = ({ info }) => {
    
    let description = info.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + "...";
    } 

    let firstDate = new Date(info.first_air_date);
    return (
        <StyledFeatured style={{backgroundImage: `url(${coverImagePath}${info.backdrop_path})`}}>
            <Vert> 
                <Hor>
                    <Name>
                        {info.original_name}
                    </Name>
                    <Information>
                        <Vote>{info.vote_average *10}% Match </Vote>
                        <Year> {firstDate.getFullYear()} </Year>
                        <Seasons> {info.number_of_seasons} season{info.number_of_seasons > 1 ? `s`: `` }</Seasons>
                    </Information>
                    <Description>
                        {info.overview}
                    </Description>
                    <Buttons>
                        <a href="#" className="watch"><FaPlay/> Watch</a>
                        <a href="#" className="moreinfo"><AiOutlineInfoCircle/> More info</a>
                    </Buttons>
                    <Genres>
                        <strong>
                            Genres: 
                        </strong>
                        {info.genres.map((item) => (
                                ` ${item.name}`
                            ))}
                    </Genres>
                </Hor>
            </Vert>
        </StyledFeatured>
    )
}

const Genres = styled.div`
    margin-top: 15px;
    color: #999;
    @media (max-width: 760px){
        
            font-size: 14px;
        
    }
    @media (min-width: 761px){
        
            font-size: 18px;
        
    }
`;

const Buttons = styled.div`
    justify-content: center;
    margin-top: 15px;
    svg{
        margin-bottom: -4px;
    }
    a{
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 12px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2s;
        :hover{
            opacity: 0.7;
        }
    }
    .watch{
        background-color: #fff;
        color: #000;
    }
    .moreinfo{
        background-color: #333;
        color: #fff;
    }
    @media (max-width: 760px){
        a{
            font-size: 16px;
        }
    }
    @media (min-width: 761px){
        a{
            font-size: 20px;
        }
    }
`;

const Description = styled.div`
    margin-top: 15px;
    color: #999;
    @media (max-width: 760px){
        font-size: 14px;
        width: 100%;
        margin-right: 30px;
    }
    @media (min-width: 761px){
        font-size: 20px;
        width: 40%;
    }
`;

const Seasons = styled.div`
    margin-right: 15px;
    display: inline-block;
`;

const Year = styled.div`
    padding: 5px;
    margin-right: 15px;
    display: inline-block;
    border: 0.5px solid white;
    border-radius: 5px;
`;

const Vote = styled.div`
    margin-right: 15px;
    display: inline-block;
    color: #46d369;
`;

const Name = styled.div`
    font-weight: bold;
    @media (max-width: 760px){
        font-size: 40px;
    }
    @media (min-width: 761px){
        font-size: 60px;
    }
`;

const Information = styled.div`
    font-weight: bold; 
    margin-top: 15px;
    @media (max-width: 760px){
        font-size: 16px;
    }
    @media (min-width: 761px){
        font-size: 18px
    }
`;
 
const Hor = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 200px;
    padding-top: 70px;
`;

const Vert = styled.div`
    width: inherit; 
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

const StyledFeatured = styled.div`
    background-size: cover;
    background-position: center;
    @media (max-width: 760px){
        height: 90vh;
    }
    @media (min-width: 761px){
        height: 100vh;
    }
`;

export default FeaturedMovie
