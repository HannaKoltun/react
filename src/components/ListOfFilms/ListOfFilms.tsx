import { films } from "../data"

export default function ListOfFilms() {
    return (
<>
        {films.map(item =>
                <div key={item.title}>
                    <h1>{item.title}</h1>
                    <h5>{item.genre}</h5>
                </div>
            )}
            </>
    )
}



