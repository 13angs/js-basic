import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const PaymentMethodList = React.lazy(() => import('./pages/paymentMethod.list'));
const PaymentMethodDetail = React.lazy(() => import('./pages/paymentMethod.detail'));


// https://stackoverflow.com/questions/33855167/convert-data-file-to-blob
// https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/payment/methods/:id' element={<PaymentMethodDetail/>} />
            <Route path='/' element={<PaymentMethodList/>} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}

export default App;
