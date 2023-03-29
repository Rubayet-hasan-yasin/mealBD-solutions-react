import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/header/Header'
import Meal from './components/meal/Meal'
import viteLogo from '/vite.svg'


function App() {
  const [searchValue, setSearchValue] = useState('')
  const [datas, setData] = useState([])

  const inputValue = (e) => {
    setSearchValue(e)
    // }
};


  useEffect(()=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
    .then(res=> res.json())
    .then(data=> setData(data.meals))
},[])


  return (
    <div className="App">
      <Header inputValue={inputValue}></Header>
      <Meal datas={datas}></Meal>
    </div>

  )
}

export default App
