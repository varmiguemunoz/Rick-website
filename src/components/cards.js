import axios from "axios"
import { useEffect, useState} from "react"
import Characters from "./characters"

export default function Cards () {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const apiRick = async () => {
            try{
            const response = await axios.get(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`)
            setCharacters(response.data);
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