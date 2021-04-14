import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../App.css';


function ToDo() {

    const [toDoes, setToDoes] = useState('');
    const [id, setId] = useState(1);


    async function fetchData(url) {
        const response = await axios.get(url)
        console.log(response.data.title)
        setToDoes(response.data.title)
    }


    useEffect(() => {

        fetchData(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }, [id])


    console.log(id)
    return (

        <div className="App">
            <h1> My To Do list:</h1>
            <p>

                {toDoes}
            </p>
            <button onClick={() => setId(id +1)}>
                show my next to do
            </button>


        </div>


    );
}

export default ToDo;
