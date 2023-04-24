import { Link } from "react-router-dom";

const ModalUser = ({showModal, logout}) =>{
    return (
    showModal &&
    <div className="border hidden md:block shadow-xl rounded-lg bg-white absolute lg:right-10 right-5 px-4 py-4">
        <div className="mb-2 cursor-pointer">
        <Link to="/myaccount">
            <h1 className="text-sm font-medium text-right hover:text-gray-400">My Account</h1>
        </Link>
        </div>
        <div className="border-t cursor-pointer">
            <h1 className="text-sm mt-2 font-medium hover:text-red-300 text-right" onClick={logout}>Sign Out</h1>
        </div>
    </div>
    )
}

export default ModalUser;