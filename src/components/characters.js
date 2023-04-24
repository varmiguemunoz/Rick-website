
const Characters = ({characters = []}) => {

return (
<div className="md:grid md:grid-cols-3 md:px-8">
{characters.map((item, index) =>(
    <>
    <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl mb-8 overflow-hidden">
    <img key={index} src={item.image} alt="rick and morty images" className="rounded-lg w-full object-cover"/>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
        <ul>
        <li className="mb-3 font-normal text-gray-700"><span className="font-medium">Status: </span>{item.status}</li>
        <li className="mb-3 font-normal text-gray-700"><span className="font-medium">Specie: </span>{item.species}</li>
        <li className="mb-3 font-normal text-gray-700"><span className="font-medium">Location: </span>{item.location.name}</li>
        </ul>
    </div>
    </div>
    </>
))}
</div>
)
}

export default Characters;