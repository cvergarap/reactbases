function User({ name, age, skills }) {
    return (
        <div className="mt-5 mb-5 mx-auto">
            <h1 
                className="text-3xl mb-2 font-bold">
                    Usuarios
            </h1>
            <h2 
                className="text-2xl mb-2 font-bold">
                    {name} tiene {age} Años
            </h2>
            <h2 
                className="text-2xl mb-2 font-medium">
                    {skills}
                    <br/>
                    {skills.join(', ')}
                    
            </h2>
            <br/>
        </div>
    )
}


export default User;

