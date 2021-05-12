import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

//api requests
import { categoryListURL, getMovieInfo } from '../util/api';

//components
import MovieRow from '../components/MovieRow'
import FeaturedMovie from '../components/FeaturedMovie'
import Nav from '../components/Nav'
import styled from 'styled-components'

export default function Home({ 
  listNetflix,
  listTrending,
  listToprated,
  listAction,
  listComedy,
  listHorror,
  listRomance,
  listDocumentary,
  featuredInfo }) {
  
    
  const categoryList = [{
    title: 'Netflix Originals',
    items: listNetflix.results,
  }, {
    title: 'Trending',
    items: listTrending.results,
    },
    {
      title: 'Top Rated',
      items: listToprated.results,
    },
    {
      title: 'Action',
      items: listAction.results,
    },
    {
      title: 'Comedy',
      items: listComedy.results,
    },
    {
      title: 'Horror',
      items: listHorror.results,
    },
    {
      title: 'Romance',
      items: listRomance.results,
    },
    {
      title: 'Documentary',
      items: listDocumentary.results,
      },]
  
  const [blackNav, setBlackNav] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackNav(true);
      } else {
        setBlackNav(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div> 
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav black={ blackNav}/>
      <FeaturedMovie info={ featuredInfo}/>
      <Lists> 
        {categoryList.map((item, key) => (
          <MovieRow
            title={item.title}
            items = {item.items}
            key={key} />
        ))}
      </Lists> 
      {featuredInfo.length <= 0 &&
      <Loading>
        <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading" />
      </Loading>
      }
    </div>
  )
}

const Loading = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 990;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lists = styled.div`
  margin-top: -150px;
`;

export const getServerSideProps = async (context) => {
  
  let res = await fetch(`${categoryListURL.netflix}`);
  const listNetflix = await res.json();
  res = await fetch(`${categoryListURL.trending}`);
  const listTrending = await res.json();
  res = await fetch(`${categoryListURL.toprated}`);
  const listToprated = await res.json();
  res = await fetch(`${categoryListURL.action}`);
  const listAction = await res.json();
  res = await fetch(`${categoryListURL.comedy}`);
  const listComedy = await res.json();
  res = await fetch(`${categoryListURL.horror}`);
  const listHorror = await res.json();
  res = await fetch(`${categoryListURL.romance}`);
  const listRomance = await res.json();
  res = await fetch(`${categoryListURL.documentary}`);
  const listDocumentary = await res.json();

  const originals = listNetflix.results[Math.floor(Math.random() * listNetflix.results.length - 1)];
  res = await fetch(getMovieInfo(originals.id));
  const featuredInfo = await res.json();

  return {
    props: {
      listNetflix,
      listTrending,
      listToprated,
      listAction,
      listComedy,
      listHorror,
      listRomance,
      listDocumentary,
      featuredInfo
    }
  }
}