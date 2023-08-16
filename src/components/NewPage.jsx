import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewItemList from './NewItemList';

const NewPage = () => {

  let {category} = useParams();
  console.log('=== category : ', category);
  if(!category){
    category='all'
  }
  
  return (
    <div>
      <Categories></Categories>
      <NewItemList category={category}></NewItemList> 
    </div>
  );
};

export default NewPage;