import React from 'react';
import '../css/NewItem.css'



const NewItem = ({article}) => {
  //비구조 할당
  let {title, description, url, urlToImage} = article;
  //이미지가 없을 때
  urlToImage = urlToImage || 'http://placehold.it/160x100';

  return (
    <div className='newsItemBlock'>
      <div className='thumnail'>
        <a href={url}>
          <img src={urlToImage} alt="thumnail" />
        </a>
      </div>
      <div className='contents'>
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewItem;