import { useEffect, useState } from "react";



///https://api.themoviedb.org/3/trending/movie/day?&api_key=c7003c15c966ed65016de2ab586e2a79&language=en-US


export default function MovieWeb() {

    let [Api, Setapi] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/day?&api_key=c7003c15c966ed65016de2ab586e2a79&language=en-US")
        .then(res=>res.json()).then(x=>Setapi(x.results))



    }, [])
    // console.log(values.data);

    return (
        <div>
            {
                Api.map((x) => {
                    <h1>{x}</h1>
                })
            }
        </div>
    )
}


