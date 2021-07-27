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
        const value = e.target.value;
        const list = [...inputList];
        list[index][e.target.name] = value;
        setInputList(list);
    };
    
    // handle click event of the Remove button
    const handleRemoveClick = (e, index) => {
        e.preventDefault();
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    
    // handle click event of the Add button
    const handleAddClick = (e) => {
        e.preventDefault();
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
                {inputList.map((x, i) => {
                    return (
                        <div>
                            <br></br>
                            <label> Ingredient Name: </label>
                            <input type="text" name="ingredientName" value={x.ingredientName} style={{backgroundColor: 'white'}} onChange={e => handleInputChange(e, i)}/>
                            <label> Quantity: </label>
                            <input type="text" name="quantity" value={x.quantity} style={{backgroundColor: 'white'}} onChange={e => handleInputChange(e, i)}/>
                            &nbsp;
                            <select name="measurement" value={x.measurement} style={{backgroundColor: 'white'}} onChange={e => handleInputChange(e, i)}>
                                <option defaultValue="amount" style={{backgroundColor: 'white'}}>Amount</option>
                                <option value="grams" style={{backgroundColor: 'white'}}>Grams</option>
                                <option value="cups" style={{backgroundColor: 'white'}}>Cups</option>
                                <option value="teaspoons" style={{backgroundColor: 'white'}}>Teaspoons</option>
                                <option value="mL" style={{backgroundColor: 'white'}}>mL</option>
                                <option value="pounds" style={{backgroundColor: 'white'}}>Pounds</option>
                            </select>
                            &nbsp;
                            <button style={{backgroundColor: 'white'}} onClick={e => handleAddClick(e)}> Add </button>
                            &nbsp;
                            <button style={{backgroundColor: 'white'}} onClick={e => handleRemoveClick(e, i)}> Remove </button>
                            
                        </div>        
                    )
                })}
                <p>
                    <input type="submit" value="Submit" style={{backgroundColor: 'white'}}/>
                </p>
                {
                    console.log(inputList)
                }
            </form>

        </div>
    )
}

export default Recipes;