import React, {useState} from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Home = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <Header setSearch={setSearch}/>
      <ProductCard search={search}/>
    </> 
  );
}
 
export default Home;