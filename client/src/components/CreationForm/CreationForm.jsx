
const CreationForm = () => {
    return (
        <>
            <div>
                <div>
                    <h1>Crea un nuevo Pokemon.</h1>
                    <p>
                        Ingresa los datos que pide el formulario, para agregar un nuevo
                        pokemon a la lista.
                    </p>
                </div>
                <form>
                    <div>
                        <label>
                            <h4>Nombre :</h4>
                        </label>
                        <input
                        type="text"
                        name="name"
                        // value={gameData.name}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.name && <p>{errors.name}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Imagen :</h4>
                        </label>
                        <input
                        type="url"
                        name="image"
                        // value={gameData.image}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.image && <p>{errors.image}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Vida :</h4>
                        </label>
                        <input
                        type="number"
                        name="vida"
                        step="1"
                        // value={gameData.rating}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.rating && <p>{errors.rating}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Ataque :</h4>
                        </label>
                        <input
                        type="number"
                        name="ataque"
                        // value={gameData.releaseDate}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.releaseDate && <p>{errors.releaseDate}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Defensa :</h4>
                        </label>
                        <input
                        type="number"
                        name="defensa"
                        // value={gameData.platforms}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.platforms && <p>{errors.platforms}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Velocidad :</h4>
                        </label>
                        <input
                        type="number"
                        name="velocidad"
                        // value={gameData.releaseDate}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.releaseDate && <p>{errors.releaseDate}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Altura :</h4>
                        </label>
                        <input
                        type="number"
                        name="altura"
                        // value={gameData.platforms}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.description && <p>{errors.description}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Peso :</h4>
                        </label>
                        <input
                        type="number"
                        name="peso"
                        // value={gameData.platforms}
                        // onChange={handleInputChange}
                        />
                        {/* {errors.description && <p>{errors.description}</p>} */}
                    </div>
                    <div>
                        <label>
                            <h4>Tipo :</h4>
                        </label>
                        {/* {genres.map((genre, index) => (
                                <div key={index}>
                                    <input
                                    type="checkbox"
                                    id={genre.id}
                                    name="genres"
                                    value={genre.name}
                                    onChange={handleInputChange}
                                    />
                                    <label htmlFor={genre.id}>{genre.name}</label>
                                </div>
                                ))} */}
                    </div>
                    <button type="submit">Agregar Juego</button>
                    {/* {formSubmitted && <p>¡Formulario enviado exitosamente!</p>} */}
                </form>
            </div>
        </>
    );
};

export default CreationForm;