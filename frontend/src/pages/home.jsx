import React, {useState} from "react";
import axios from "axios";

function Home(props){

    const [name , setName] = useState("");
    const [age , setAge] = useState("");

    function handleOnChange(event){
        const currentName = event.target.value;
        setName(currentName);
    }

    async function handleOnClick(){
        const response = await axios.get(props.SERVER_URL + "?name=" + name);
        const currentAge = response.data.age;
        if(currentAge !== null){
            setAge(response.data.age);
        }else{
            setAge("Not Found");
        }
    }

    return (
        <div className="form">
            <div className="input-area">
                <input onChange={handleOnChange} type="text" placeholder="Your Name"></input>
                <button onClick={handleOnClick}>
                    <i className="fa-solid fa-magnifying-glass" style={ {"color": "#d9d9d9"}}></i>
                    Guess My Age !
                </button>
            </div>
            <div className="front-shape">
                <div className="answer">
                    {age} <br/> {age === "" || age === "Not Found"? "" : "Years"}
                </div>
                <i className="fa-solid fa-user" style={{"color": "#d9d9d9"}}></i>
            </div>
        </div>
    )
}

export default Home;