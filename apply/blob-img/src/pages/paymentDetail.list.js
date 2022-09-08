import React from 'react';
import axios from 'axios';
import PaymentDetailForm from '../components/paymentDetail.form';
import {useNavigate} from 'react-router-dom';


// https://stackoverflow.com/questions/33855167/convert-data-file-to-blob
// https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/
function PaymentDetailList({paymentMethodId}) {
  const [paymentDetails, setPaymentDetails] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect( () => {
    async function fetchData () {
      try{
        const res = await axios.get('https://localhost:7117/api/v2/reports/payments/details');
        if(res.status === 200)
        {
          setPaymentDetails(res.data);
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
    <div className="App">
      <div>
        <h2>Payment Details</h2>
      </div>
      <div>
        {
          paymentDetails?.map((paymentDetail, ind) => (
            <img 
              key={ind} 
              src={`data:${paymentDetail.slip_file_type};base64,${paymentDetail?.slip_file}`} 
              width={200} 
              height={200} 
              alt=""
              onClick={(e) => handlePaymentDetail(e, paymentDetail?.payment_method_id)}
            />
          ))
        }
      </div>

      <PaymentDetailForm/>
    </div>
  );
}

export default PaymentDetailList;
