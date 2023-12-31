import Header from './components/header/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetView from './components/Detveiw/Detview';
import Cart from './components/cart/Cart';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: "60px" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
