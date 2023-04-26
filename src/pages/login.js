import { useState } from "react"
import {signInWithEmailAndPassword} from "firebase/auth"
import { auth } from "../index"
import { useNavigate } from "react-router-dom"

const Login = () => {
const [loginEmail, setLoginEmail] = useState ('');
const [LoginPassword, setLoginPassword] = useState('');
const [error, setError] = useState('');

const navigate = useNavigate();

const LoginFunction = async () =>{
    try {
        await signInWithEmailAndPassword(auth, loginEmail, LoginPassword);
        navigate("/dashboard");
    } catch (err) {
        setError(err.message)
    }
}

const onSubmit = (event) =>{
event.preventDefault();
}


return (
<div className="px-8 py-8">
    {error && <div><p>{error}</p></div>}
    <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md">
    <h2 class="text-lg font-semibold text-gray-700 capitalize">Login</h2>

    <form onSubmit={onSubmit}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" 
                    onChange={(e) => setLoginEmail(e.target.value)}
                />
            </div>

            <div>
                <label class="text-gray-700" for="password">Password</label>
                <input id="password" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
            </div>

        </div>

        <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={LoginFunction}
            >Save</button>
        </div>
    </form>
</section>
</div>
)
}

export default Login;