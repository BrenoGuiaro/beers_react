
import axios from 'axios';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { ListBeers } from './pages/ListBeers';
import { useEffect, useState } from 'react';
import { SingleBeer } from './pages/SingleBeer';
import { BeerRandom } from './pages/BeerRandom';


function App() {
  const [beers, setBeers] = useState([])

  const getBeers = async () => {
    try {
      const { data } = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
      setBeers(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getBeers()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/beer' element={<ListBeers beers={beers} />}></Route>
        <Route path='/:id' element={<SingleBeer beers={beers} />}></Route>
        <Route path='/random' element={<BeerRandom beers={beers} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
