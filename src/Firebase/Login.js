import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CartStyle } from '../components/Cart/CartStyle';
import { AuthContext } from '../context/AuthContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app'
import 'firebase/auth'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Login = () => {

    const classes = useStyles()

    const { changeLogged } = useContext(AuthContext);

    const [signInEmail, setSignInEmail] = useState("")
    const [signInPass, setSignInPass] = useState("")

    const SignInUser = (evt) => {
        evt.preventDefault();

        const auth = firebase.auth()

        auth
            .signInWithEmailAndPassword(signInEmail, signInPass)
            .then(changeLogged(signInEmail))

    }

    return <div><h1>Iniciar sesión</h1>
        <form className={classes.root} noValidate autoComplete="off">

            <TextField
                required
                value={signInEmail}
                onChange={e => setSignInEmail(e.target.value)}
                id="signupEmail"
                label="Email"
                variant="outlined"
            />
            <TextField
                required
                value={signInPass}
                type="password"
                onChange={e => setSignInPass(e.target.value)}
                id="signupPass"
                label="Contraseña"
                placeholder="Mínimo 6 caracteres"
                variant="outlined"
            />
            <Button onClick={SignInUser} type="submit" className={classes.btnBuy}>INGRESAR</Button>
        </form>
    </div>
}