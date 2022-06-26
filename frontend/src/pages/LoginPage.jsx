import {useState} from 'react'
import Signin from './SignIn/index'
import Signup from './Signup/index'

const LoginPage = ({setLogin}) => {


    const [displayLogin,setDisplayLogin] = useState(true);
    if(displayLogin){
        return(
            <div>
            <Signin setLogin={setLogin} displayLogin={displayLogin} loginHandler={setDisplayLogin}/>
            </div>
        )
    }
    return(
        <Signup displayLogin={displayLogin} loginHandler={setDisplayLogin}/>
    )
}
export default LoginPage