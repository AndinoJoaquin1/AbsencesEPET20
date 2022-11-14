import React from 'react';
import 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

export default(props) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const firebase = useFirebaseApp();

    const submit async ()=>{

        await firebase.auth().createUserWithEmailAndPassword(email,password);
    }

    const logout = async ()=>{
        await firebase.auth().signOut();
    }


    return(
        <div>
            <div>

            <label htmlFor="email">Correo Electronico</label>
            <input type="email" id="email" onChange{ (ev)=> setEmail(ev.target.value) } />
            <label for htmlFor="password">Contraseña</label>
            <input type="password" id="password" onChange{ (ev)=> setPassword(ev.target.value)} />
            <button onClick={submit}>Iniciar Sesion</button>

            </div>
        {
            user && <button onClick={logout}>Cerrar sesion</button>
        }

        </div>
    )
}