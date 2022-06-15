
import './App.css';
import {useState} from 'react';

function App() {
 
  const [data,setData]=useState({
    username:"",
    password:"",

  })
  const{username,password}=data;
  const handleChange=(e)=>{
   setData({...data,[e.target.name]:e.target.value})
    
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(data.username.length<5){
alert("username should be mmore than 5 characters")
    }else
    
    {console.log(data)}
  }

  return (
    <div className="App">
     <form action="submit" onSubmit={handleSubmit}>
       <label htmlFor="username">username</label>
       <input type="text" name='username' value={username}  onChange={handleChange} />
       <label htmlFor="password">password</label>
       <input type="password" name="password" value={password} onChange={handleChange} />
     <button >submit</button>

     </form>





{/* <Login /> */}
{/* <Signup /> */}


    </div>

  )
  }
export default App;
