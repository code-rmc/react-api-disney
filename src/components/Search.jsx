import { useEffect, useState } from "react";
import { searchAPI } from "../utils/movies.api";

export function Search() {
    const [search, setSearch] = useState("");

    function name(e) {
        setSearch(e.target.value);
    }

    useEffect(()=>{
        if(!search) return;
        searchAPI({type: "movie",name: search})
        .then( res => {
            console.log(res);
        })
        .catch(err => console.log(err));

        console.log(search);
    }, [search])

    return (
        <div>
            <input type="text" onChange={name}/>
        </div>
    )
}