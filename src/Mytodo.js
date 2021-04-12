import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';


function ToDo() {

    const [toDoes, setToDoes] = useState('');

    async function fetchData(url) {
        const response = await axios.get(url)
        console.log(response.data.title)
        setToDoes(response.data.title)
    }


    useEffect(() => {

        fetchData('https://jsonplaceholder.typicode.com/todos/1');
    }, [])


    return (

        <div className="App">
            <h1> My To Do list:</h1>
            <p>
                {toDoes}
            </p>
            <button onClick={() => fetchData("https://jsonplaceholder.typicode.com/todos/2")}>
                show my next to do
            </button>


        </div>


    );
}

export default ToDo;
