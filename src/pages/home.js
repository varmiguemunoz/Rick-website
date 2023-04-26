import { useState} from "react";
import RegisterUser from "../components/register";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../index"

export default function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate()

  onAuthStateChanged(auth , (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null);
    }
  })


  return (
  <>
  {user ? navigate('/dashboard') : <RegisterUser /> }
  
  </>
  );
}
