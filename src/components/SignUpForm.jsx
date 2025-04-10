import { useState } from "react";


function SignUpForm({setToken}){

const [username, setUsername] = useState("")
const [password, setPassword] = useState ("")
const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();

        try{
            console.log("hello!")
            const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", {
                method:"POST",
                headers:{"Content-type": "application/json"},
                body: JSON.stringify({
                    username: username,
                    password:password,}),
            })
        

        const result = await response.json();
        console.log(result); 
        setToken(result.token)


        }catch(error) {
            console.log(error)
        }

        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
        const result = await response.json();
        console.log(result);        

      }

return (

<>
    
<h2> Sign Up! </h2>
{error && <p>{error}</p>}


<form onSubmit={handleSubmit}>

  <label>
    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
  </label>

  <br></br>

  <label>
    Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
  </label>

  <br></br>

  <button>Submit</button>

</form>
</>

);

}

export default SignUpForm