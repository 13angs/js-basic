import React from 'react';
import axios from 'axios';

export default function PaymentForm(){
    const [newMethod, setNewMethod] = React.useState({
        name: '',
        display_name: '',
        payment_method_file: '',
        payment_method_file_type: '',
      });
    
    const readAdBase64 = (e) => {
        let textarea = document.querySelector("textarea");
        const base64String = e.target.result.replace("data:", "")
        .replace(/^.+,/, "");

        textarea.textContent = base64String;

        setNewMethod(prev => ({
            ...prev,
            payment_method_file: base64String
        }))
    }
    const handleUpload = (e) => {
        const file = e.target.files[0];
        setNewMethod(prev => ({
          ...prev,
          payment_method_file_type: file.type
        }))
        const reader = new FileReader();
        reader.addEventListener('load', readAdBase64);
        // reader.readAsText(file);
        reader.readAsDataURL(file);
      }
    
      const handleNameChange = (e) => {
        setNewMethod(prev => ({
          ...prev,
          name: e.target.value
        }))
      }
    
      const handleDisplayNameChange = (e) => {
        setNewMethod(prev => ({
          ...prev,
          display_name: e.target.value
        }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const res = await axios.post('https://localhost:7005/api/v2/payments/methods', newMethod);
          if(res.status === 201)
          {
            alert('Payment added');
          }
        }catch (e){
          console.log(e);
        }
      }
    return (
        <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleUpload} type="file" />
          <textarea rows={10} cols={50}/>
          {
            newMethod.payment_method_file &&
            <img 
              src={`data:${newMethod.payment_method_file_type};base64,${newMethod.payment_method_file}`} 
              width={100} 
              height={100} 
              alt=''
            />
          }
        </div>

        <div>
          <label>Name: </label>
          <input 
            name='name' 
            type="text" 
            onChange={handleNameChange}
          />
        </div>

        <div>
          <label>Display Name: </label>
          <input 
            name='display_name' 
            type='text' 
            onChange={handleDisplayNameChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    )
}