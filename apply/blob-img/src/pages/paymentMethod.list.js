import React from 'react';
import axios from 'axios';
import PaymentForm from '../components/payment.form';
import {useNavigate} from 'react-router-dom';


// https://stackoverflow.com/questions/33855167/convert-data-file-to-blob
// https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/
function PaymentMethodList() {
  const [paymentMethods, setPaymentMethods] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect( () => {
    async function fetchData () {
      try{
        const res = await axios.get('https://localhost:7117/api/v2/reports/payments/methods');
        if(res.status === 200)
        {
          setPaymentMethods(res.data);
        }
      }catch (e) {
        console.log(e);
      }

    }
    fetchData();
  }, [])

  // const readFile = (e) => { 
  //   let textarea = document.querySelector("textarea");
  //   textarea.textContent = e.target.result;
  //   setNewMethod(prev => ({
  //     ...prev,
  //     payment_method_file: e.target.result
  //   }))
  // }

  
  const handlePaymentDetail = (e, path) => {
    navigate(path);
  }
  return (
    <>
      <div className="App">
        <div>
          <h2>Payment Methods</h2>
        </div>
        <div>
          {
            paymentMethods?.map((paymentMethod, ind) => (
              <img 
                key={ind} 
                src={`data:${paymentMethod.payment_method_file_type};base64,${paymentMethod?.payment_method_file}`} 
                width={200} 
                height={200} 
                alt=""
                onClick={(e) => handlePaymentDetail(e, `/payment/methods/${paymentMethod?.payment_method_id}`)}
              />
            ))
          }
        </div>

        <PaymentForm/>
      </div>
    </>
  );
}

export default PaymentMethodList;
