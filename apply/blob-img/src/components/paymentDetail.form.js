import React from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';


export default function PaymentDetailForm(){
    const [newDetail, setNewDetail] = React.useState({
        payment_method_id: '',
        slip_file: '',
        slip_file_type: '',
        checkout_id: '',
        order_id: '',
        amount: 0
      });
    const {id} = useParams();
    const navigate = useNavigate();
    
    const readAdBase64 = (e) => {
        let textarea = document.querySelector("#detail-textarea");
        const base64String = e.target.result.replace("data:", "")
        .replace(/^.+,/, "");

        textarea.textContent = base64String;

        setNewDetail(prev => ({
            ...prev,
            slip_file: base64String
        }))
    }
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setNewDetail(prev => ({
          ...prev,
          slip_file_type: file.type
        }))
        const reader = new FileReader();
        reader.addEventListener('load', readAdBase64);
        // reader.readAsText(file);
        reader.readAsDataURL(file);
      }
    
      const handleAmountChange = (e) => {
        setNewDetail(prev => ({
          ...prev,
          amount: e.target.value
        }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post('https://localhost:7005/api/v2/payments/details', newDetail);
          if(res.status === 201)
          {
            alert('Payment approved');
          }
        }catch (e){
          console.log(e);
        }
      }

      const handleDetail = (e, key) => {
        setNewDetail(prev => ({
          ...prev,
          [key]: e.target.value
        }))
      }
    
      React.useEffect(() => {
        setNewDetail(prev => ({
          ...prev,
          payment_method_id: id
        }))
      }, [id]);
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleUpload} type="file" />
          <textarea id="detail-textarea" rows={10} cols={50}/>
          {
            newDetail.slip_file &&
            <img 
              src={`data:${newDetail.slip_file_type};base64,${newDetail.slip_file}`} 
              width={100} 
              height={100} 
              alt=''
            />
          }
        </div>

        <div>
          <label>Amount: </label>
          <input 
            name='name' 
            type="number" 
            onChange={handleAmountChange}
          />
        </div>
        <div>
          <label>Order Id: </label>
          <input 
            name='order_id' 
            type="text" 
            onChange={(e) => handleDetail(e, 'order_id')}
          />
        </div>
        <div>
          <label>Checkout Id: </label>
          <input 
            name='checkout_id' 
            type="text" 
            onChange={(e) => handleDetail(e, 'checkout_id')}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate('/')}>Back</button>
    </div>
    )
}