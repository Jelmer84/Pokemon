import React from "react";

function PokemonPage({goToNextPage, goToPreviousPage}) {
    return  (
        <div>
            {goToPreviousPage && <button onClick={goToPreviousPage}>Vorige</button>}
            {goToNextPage && <button onClick={goToNextPage}>Volgende</button>}
        </div>

    );
}
export default PokemonPage