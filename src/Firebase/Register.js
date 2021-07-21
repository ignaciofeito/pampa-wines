import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CartStyle } from '../components/Cart/CartStyle';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getFirestore} from './firebase'
import firebase from 'firebase/app'
import 'firebase/auth'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Register = () => {

    const classes = useStyles()

    const [inputName, setInputName] = useState('')
    const [signupEmail, setSignupEmail] = useState('')
    const [inputPhone, setInputPhone] = useState('')
    const [signupPass, setSignupPass] = useState('')

    const auth = firebase.auth()

    const { changeLogged } = useContext(AuthContext);

    const SignupUser = (evt) => {
        evt.preventDefault();

        auth
            .createUserWithEmailAndPassword(signupEmail, signupPass)
            .then(()=>{
                changeLogged(signupEmail, inputName, inputPhone)
                
                    const dataBase = getFirestore();
                    const users = dataBase.collection('users');
                    
                    const newUser = {name: inputName, email: signupEmail, phone: inputPhone}

                    users.add(newUser).then(({ id }) => {
                      console.log(id);
                    }).catch(err => {
                      console.log(err);
                    }).finally(() => {
                      console.log("end");
                    })
                  
            })

    }

    auth.onAuthStateChanged(user => {
        if (user) {
            return <h1>Logueado</h1>
        } else {
            return <h2>Logueate rey</h2>
        }
    })

    return <div><h1>Regístrate</h1>

        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                required
                value={inputName}
                onChange={e => setInputName(e.target.value)}
                id="inputName"
                label="Nombre"
                variant="outlined"
            />
            <TextField
                required
                value={signupEmail}
                onChange={e => setSignupEmail(e.target.value)}
                id="signupEmail"
                label="Email"
                variant="outlined"
            />
            <TextField
                required
                value={inputPhone}
                onChange={e => setInputPhone(e.target.value)}
                id="inputPhone"
                label="Teléfono"
                variant="outlined"
            />
            <TextField
                required
                value={signupPass}
                type="password"
                onChange={e => setSignupPass(e.target.value)}
                id="signupPass"
                label="Contraseña"
                placeholder="Mínimo 6 caracteres"
                variant="outlined"
            />
            <Button onClick={SignupUser} type="submit" className={classes.btnBuy}>INGRESAR</Button>
        </form>
    </div>
}