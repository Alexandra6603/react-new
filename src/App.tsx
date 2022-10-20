import {Route, Routes} from 'react-router-dom'
import { AboutPages } from './components/pages/aboutPages';
import { ProductPage } from './components/pages/productPages';

function App() {
  return(
    <Routes>
      <Route path='/' element={<ProductPage/>}/>
      <Route path='/about' element={<AboutPages/>}/>
    </Routes>
  )
}

export default App;
