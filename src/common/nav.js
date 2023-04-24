import { useState } from "react"
import ModalUser from "./modalUser"
import ModalNav from "./modalNav"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../index"
import {signOut} from "firebase/auth"

export default function Navbar() {
  const [showModal, setShowModal] = useState(false)
  const [itemsNav, setItemsNav] = useState(false);
  // const [user, setUser] = useState({})

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser)
  // })
  const navigate = useNavigate();

  const logout = async() => {
    try {
     await signOut(auth)
     navigate('/')
    } catch (err) {
      throw err
    }
  }

  const toogleModal = () => {
    setShowModal(!showModal);
  }

  const toogleNavBar = () => {setItemsNav(!itemsNav)};

    return (
<>
<nav className="bg-white border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <Link to="/dashboard" className="flex items-center">
      <img src="http://localhost:3000/navbarIcon.jpeg" className="h-9 w-9 mr-2 object-cover rounded-full" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap">Rick & Morty</span>
  </Link>
  <div className="flex items-center md:order-2">
      <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" onClick={toogleModal}>
        <img className="w-10 h-10 rounded-full" src={localStorage.getItem("profilePic")} alt="userphoto" />
      </button>
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false" onClick={toogleNavBar}>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    </div>

</div>
</nav>
 <ModalUser showModal={showModal} logout={logout}/>
 <ModalNav itemsNav={itemsNav} logout={logout}/>
</>
    )
}