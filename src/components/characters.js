

export default function Characters ({characters = []}) {

return (
<div className="md:grid md:grid-cols-4 grid grid-cols-2 md:gap-6 gap-4">
{characters.map((item, index) =>(
    <>
    <div className="max-w-sm bg-white border border-gray-100 rounded-lg shadow-xl mb-8 overflow-hidden">
    <img key={index} src={item.image} alt="rick and morty images" className="rounded-lg w-full object-cover"/>
    <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.name}</h5>
        <p className="mb-3 font-normal text-gray-700">status: {item.status}</p>
        <p className="mb-3 font-normal text-gray-700">species: {item.species}</p>
        <p className="mb-3 font-normal text-gray-700">gender: {item.gender}</p>
        <p className="mb-3 font-normal text-gray-700">location: {item.location.name}</p>
        <p className="mb-3 font-normal text-gray-700">origin: {item.origin.name}</p>
    </div>
    </div>
    </>
))}
</div>
)
}