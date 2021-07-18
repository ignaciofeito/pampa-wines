import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CartStyle } from '../components/Cart/CartStyle';
import { CartContext } from '../context/CartContext'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import firebase from 'firebase/app'
import 'firebase/auth'

const useStyles = makeStyles((theme) => CartStyle(theme))

export const Auth = () => {

    const classes = useStyles()

    const { changeLogued } = useContext(CartContext);

    const [signupEmail, setSignupEmail] = useState("")
    const [signupPass, setSignupPass] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputPhone, setInputPhone] = useState("")

    const SignupUser = (evt) => {
        evt.preventDefault();

        const auth = firebase.auth()

        auth
            .createUserWithEmailAndPassword(signupEmail, signupPass)
            .then(changeLogued(signupEmail,inputName,inputPhone, true))

    }

    return <div><h4>Inicia sesión o regístrate para finalizar tu compra</h4>
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