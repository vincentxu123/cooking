import { useState } from 'react';

const Recipes = () => {

    const [users, setUsers] = useState([
        { id: 1, firstName: 'Frank', lastName: 'Murphy', email: 'frank.murphy@test.com'},
        { id: 2, firstName: 'Vic', lastName: 'Reynolds', email: 'vic.reynolds@test.com'},
        { id: 3, firstName: 'Gina', lastName: 'Jabowski', email: 'gina.jabowski@test.com'},
        { id: 4, firstName: 'Jessi', lastName: 'Glaser', email: 'jessi.glaser@test.com'},
        { id: 5, firstName: 'Jay', lastName: 'Bilzerian', email: 'jay.bilzerian@test.com'}
    ]);

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
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td> {user.firstName} {user.lastName} </td>
                            <td> {user.email} </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Recipes;