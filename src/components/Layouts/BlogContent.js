function BlogContent(){
    return(
        <div className="p-6 bg-gray text-white">
            <h2 className="font-semibold text-3-xl mb-5">Articulos</h2>
            <p>Curso de PHP</p>
            <hr/>
            <p>... No dejes de aprender ...</p>
            <button
                type="button"
                className="btn bg-gray-500 hover:bg-gray-700 inline-block px-6 py-2.5 rounded mt-4 text-white text-semibold font-medium leading-thight"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                    Ver Curso
                </button>
        </div>
    )
}
export default BlogContent;