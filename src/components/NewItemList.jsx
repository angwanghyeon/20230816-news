import React, { useEffect, useState } from 'react';
import NewItem from './NewItem';
import '../css/NewItemList.css'
import axios from 'axios';
import usePromise from '../lib/usePromise';


//  const {id, }
//  const sampleArticle = {
//   title:'제목',
//   description: 'Lorem ipsum dolor sit amet consectetur.',
//   url:'https://www.naver.com',
//   urlToImage: ''
//  }

const NewItemList = ({category}) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoding] = useState(false);

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     setLoding(true);
  //     try{
  //       const url = 'https://newsapi.org/v2/top-headlines?country=kr';
  //       const query = category === 'all' ? '' : '&category='+category;
  //       const apiKey = '&apiKey=2721d1f0de38415b978ddeed5ff2291a'
  //       const response = await axios.get(url+query+apiKey);
  //       setArticles(response.data.articles);
  //     }catch(e){
  //       console.log(e)
  //     }
  //     setLoding(false);
  //   }
  //   fetchData();

   // },[category]);
    const [loading, response, error] = usePromise(()=>{
      const url = 'https://newsapi.org/v2/top-headlines?country=kr';
        const query = category === 'all' ? '' : '&category='+category;
        const apiKey = '&apiKey=2721d1f0de38415b978ddeed5ff2291a'
        return axios.get(url+query+apiKey);
    },[category])
 

  if(loading){
    return <div className='newListBlock'>data loading.....</div>
  }
  if(!response){
    return null;
  }
  if(error){
    return <div className='newListBlock'>error!!!</div>
  }
  const {articles} = response.data;

  return (
    <div className='newListBlock'>
      {articles.map(article => (
        <NewItem key={article.url} article={article}></NewItem>
      ))}
      {/* <NewItem article={articles}></NewItem>
      <NewItem article={articles}></NewItem>
      <NewItem article={articles}></NewItem> */}
    </div>
  );
};

export default NewItemList;