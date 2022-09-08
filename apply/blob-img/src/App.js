import React from 'react';
import axios from 'axios';


// https://stackoverflow.com/questions/33855167/convert-data-file-to-blob
// https://www.geeksforgeeks.org/how-to-convert-image-into-base64-string-using-javascript/
function App() {
  const [paymentMethods, setPaymentMethods] = React.useState([]);
  const [newMethod, setNewMethod] = React.useState({
    name: '',
    display_name: '',
    payment_method_file: ''
  });

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

  const readFile = (e) => { 
    let textarea = document.querySelector("textarea");
    textarea.textContent = e.target.result;
    setNewMethod(prev => ({
      ...prev,
      payment_method_file: e.target.result
    }))
  }

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
    <div className="App">
      <div>
        {
          paymentMethods?.map((paymentMethod, ind) => (
            <img key={ind} src={`data:image/png;base64,${paymentMethod?.payment_method_file}`} width={200} height={200} alt="" />
          ))
        }
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input onChange={handleUpload} type="file" />
          <textarea rows={10} cols={50}/>
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
    </div>
  );
}

export default App;
