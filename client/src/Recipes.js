import { useState, useEffect } from 'react';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("/recipes").then((res) => res.json()).then((data) => {
          setRecipes(data);
        })
    }, []);

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
                                        console.log(key);
                                        return <li key={key}>{key}: {recipe.ingredients[key]}</li>
                                    })}
                                </ul>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Recipes;