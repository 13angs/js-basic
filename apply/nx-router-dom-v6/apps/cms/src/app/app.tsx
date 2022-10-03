// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Dashboard, Product} from '@nx-router/pages'
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, useNavigate} from 'react-router-dom';

function MenuList(){
  const navigate = useNavigate();
  return (<div>
    <div>
      <Link to={'products'}>Product Page</Link>
    </div>
    <div>
      <Link to={'dashboard'}>Dashboard Page</Link>
    </div>
    <div>
      <button onClick={() => navigate('orders')}>Order page</button>
    </div>
</div>)
}
function CustomRouter(){
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  path='/' >
        <Route path='/' element={<MenuList/>}/>
        <Route path='products' element={<Product/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='orders' element={<div>Order Page</div>} />
        <Route path='login' element={(<form>
          <div>
            <a href='dashboard' >Submit</a>
          </div>
          <div>
            <a href='products'>Register</a>
          </div>
        </form>)} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}


export function App() {
  return (
    <CustomRouter/>
  );
}

export default App;
