import { RouterProvider } from 'react-router-dom';
import Router from "./routes/Routing";
import { ShopContextProvider } from './context/ShopContext';

function App() {
  return (
    <>
      <ShopContextProvider>
        <RouterProvider router={ Router } />
      </ShopContextProvider>
    </>
  )
}


export default App;
