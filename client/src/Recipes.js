import { useState, useEffect } from 'react';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [inputList, setInputList] = useState([{ingredientName: "", quantity: "", measurement: 'Amount'}])

    useEffect(() => {
        fetch("/recipes").then((res) => res.json()).then((data) => {
          setRecipes(data);
        })
    }, []);

    // handle input change
    const handleInputChange = (e, index) => {
        const { ingredientName, quantity, measurement } = e.target;
        const list = [...inputList];
        list[index]['ingredientName'] = ingredientName;
        list[index]['quantity'] = quantity;
        list[index]['measurement'] = measurement;
        setInputList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { ingredientName: "", quantity: "", measurement: 'Amount' }]);
    };

    return (
        <div className="container">
            <h1>Recipes</h1>
            <table rules="all" style={{marginLeft: "auto", marginRight: "auto"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes && recipes.map(recipe =>
                        <tr key={recipe.id}>
                            <td> {recipe.name}</td>
                            <td> 
                                <ul>
                                    {Object.keys(recipe.ingredients).map((key) => {
                                        return <li key={key}>{key}: {recipe.ingredients[key]}</li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            &nbsp;
            
            <p> <strong>Add Recipe</strong> </p>
            <form>
                <label> Name: </label>
                <input type="text" name="name" style={{backgroundColor: 'white'}}/>
                <p>
                    <label> Ingredient Name: </label>
                    <input type="text" name="ingredient" style={{backgroundColor: 'white'}}/>
                    <label> Quantity: </label>
                    <input type="text" name="quantity" style={{backgroundColor: 'white'}}/>
                    &nbsp;
                    <select style={{backgroundColor: 'white'}}>
                        <option defaultValue="amount" style={{backgroundColor: 'white'}}>Amount</option>
                        <option value="grams" style={{backgroundColor: 'white'}}>Grams</option>
                        <option value="cups" style={{backgroundColor: 'white'}}>Cups</option>
                        <option value="teaspoons" style={{backgroundColor: 'white'}}>Teaspoons</option>
                        <option value="mL" style={{backgroundColor: 'white'}}>mL</option>
                        <option value="pounds" style={{backgroundColor: 'white'}}>Pounds</option>
                    </select>
                    &nbsp;
                    <button style={{backgroundColor: 'white'}}> Add </button>
                    &nbsp;
                    <button style={{backgroundColor: 'white'}}> Remove </button>
                    <p>
                        <input type="submit" value="Submit" style={{backgroundColor: 'white'}}/>
                    </p>
                </p>          
            </form>

            
            
        </div>
    )
}

export default Recipes;