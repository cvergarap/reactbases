function HPCharacter({name, house, image, species, gender, dateOfBirth, ancestry}){
    const imgClass = "w-32 h-32 mr-2 rounded-lg";
    return(
        <div className="flex mb-1 text-sm py-2 px-2 bg-gray-800 text-white rounded rounded-lg">
            <img src={image} className={imgClass} alt={name} />
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-left text-sm">{house}</p>
                <p className="text-left text-sm">{species}</p>
                <p className="text-left text-sm">{gender}</p>
                <p className="text-left text-sm">{dateOfBirth}</p>
                <p className="text-left text-sm">{ancestry}</p>
            </div>
        </div>
    )
}
export default HPCharacter;