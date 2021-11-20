import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';

function App() {

const [text, setText] = useState(null);
const [data, setData] = useState();

useEffect(() => {
  const timeoutId = setTimeout(() => {
    axios.get(`https://609cd6ba04bffa001792d638.mockapi.io/books?search=${text}`)
      .then((res) => {
        const arr = res.data;
        setData(arr);
        if(arr.length === 0){
          setData([]);
          console.log("No data found = "+text);
        }
      })
  }, 1000);
  return () => clearTimeout(timeoutId);
}, [text])

  return (
    <div className="App">
      <input type="text" style={{marginTop:"20px"}} onChange={(e) => 
        // handleChange(e.target.value)
        setText(e.target.value)
        }></input>
      <div style={{marginTop:"20px", display:"flex", flexWrap: "wrap", justifyContent: "space-between", margin:"0 20px"}}>
        {/* {console.log(data)} */}
        {data && data.length > 0 && data.map((item, key) => (
          <div key={key}  style={{width:"350px", margin:"0 10px"}}>
            <div style={{display:"flex", justifyContent: "space-between"}}>
              <h3>{item.book_author}</h3>
              <h5>{item.name}</h5>
            </div>
            <div>
              <img src={item.book_image} width="100%"/>
            </div>
            <div>
              <h2><i>Price: </i>{item.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
