import { Link } from "react-router-dom"

const ModalNav = ({itemsNav, logout}) => {
return (
    itemsNav &&
        <div className="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 font-medium rounded-lg shadow-lg" id="user-dropdown">
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li>
              <Link to="/myaccount" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
            </li>
            <li className="border-t mt-2">
              <h1 className="block px-4 py-2 text-sm text-gray-700 hover:text-red-300 mt-2 cursor-pointer" onClick={logout}>Sign Out</h1>
            </li>
          </ul>
        </div>
)
}

export default ModalNav