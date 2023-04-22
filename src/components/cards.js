import axios from "axios"
import { useEffect, useState} from "react"
import Characters from "./characters"

export default function Cards () {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const apiRick = async () => {
            try{
            const response = await axios.get(`https://rickandmortyapi.com/api/character/1,2`)
            setCharacters(response.data);
            console.log(response);
            } catch (err) {
                throw err
            }
        }

    apiRick();
      }, []);

return (
<div className="px-6 py-6">
    <Characters characters={characters}/>
</div>
)
}