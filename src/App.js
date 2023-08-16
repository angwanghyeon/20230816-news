import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useCallback, useState } from 'react';
import NewItem from './components/NewItem';
import NewItemList from './components/NewItemList';
import Categories from './components/Categories';
import NewPage from './components/NewPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  // const [data, setData] = useState(null);

  // 동기 처리
  // const onClick = async() =>{
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => {
  //       //axios의 데이터를 받아와서 세팅해주겠다.
  //       setData(response.data)
  //     })

  // }
  //비동기 처리
  // const onClick = async() =>{
  //   try{
  //   const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apikey=8044e094c0d445e497e559590917711b');
  //     setData(response.data)
  //   }catch (e){
  //     console.log(e);
  //   }
  // }
  // const [category, setCategory] = useState('all');

  // const onSelect = useCallback(category => setCategory(category),[]);

  return (
    <Routes>
      {/* <button onClick={onClick}>불러오기</button> */}
      {/* data가 존재한다면 textarea에 넣어주라는 의미 && */}
      {/* {data && <textarea rows={8} value={JSON.stringify(data, null, 2)} readOnly></textarea>} */}
      {/* <NewItem article={sampleArticle}></NewItem> */}
      {/* <Categories category={category} onSelect={onSelect}></Categories>
      <NewItemList category={category}></NewItemList> */}
      <Route path='/:category?' element={<NewPage></NewPage>}></Route>
    </Routes>
  );
}

export default App;
