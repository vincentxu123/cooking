import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

const Groceries = () => {

    const [groceries, setGroceries] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState(0);
    const [newMeasurement, setNewMeasurement] = useState('');
    const history = useHistory();
    

    useEffect(() => {
        fetch("/groceries").then((res) => res.json()).then((data) => {
          setGroceries(data);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGrocery = { name: newItem, quantity: newQuantity, measurement: newMeasurement };
        fetch('/newgroceries', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newGrocery)
        }).then(() => {
            history.push('/');
            window.location.reload();
        })
    }

    const handleDelete = (data) => {
        fetch('/deletegrocery', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => {
            history.push('/');
            window.location.reload();
        });
    }

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <h1>Grocery List</h1>
            <div className="container" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <ul style={{paddingRight: '60px'}}>
                    {groceries.map(data => {
                        return <li key={data.name}>
                            {data.name}: {data.quantity} {data.measurement}  
                            <button style={{backgroundColor: 'white', float: 'right'}} onClick={() => handleDelete(data)}><i className="fa fa-trash-o" style={{backgroundColor: 'white'}}></i></button>
                            </li>
                    })}
                </ul>
            </div>
            <form onSubmit={handleSubmit}>
                <label> New Item: </label>
                <input type="text" name="name" onChange={(e) => setNewItem(e.target.value)} style={{backgroundColor: 'white'}}/>
                <label> Quantity: </label>
                <input type="text" name="quantity" onChange={(e) => setNewQuantity(e.target.value)} style={{backgroundColor: 'white'}}/>
                <select onChange={(e) => setNewMeasurement(e.target.value)} style={{backgroundColor: 'white'}}>
                    <option defaultValue="amount" style={{backgroundColor: 'white'}}>Amount</option>
                    <option value="grams" style={{backgroundColor: 'white'}}>Grams</option>
                    <option value="cups" style={{backgroundColor: 'white'}}>Cups</option>
                    <option value="teaspoons" style={{backgroundColor: 'white'}}>Teaspoons</option>
                    <option value="mL" style={{backgroundColor: 'white'}}>mL</option>
                    <option value="pounds" style={{backgroundColor: 'white'}}>Pounds</option>
                </select>
                <input type="submit" value="Submit" style={{backgroundColor: 'white'}}/>
            </form>
        </div>
    )
}

export default Groceries;