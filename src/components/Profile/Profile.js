import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Profile = () => {

    const { logged } = useContext(AuthContext);

    return <>
        {logged ? <div><Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Mi perfil</h1>
                </Grid>
                <Grid item xs={2}>
                    <ul>
                        <a href="#misdatos"><li>Mis datos</li></a>
                        <a href="#miscompras"><li>Mis compras</li></a>
                        <a href="#wishlist"><li>Lista de deseos</li></a>
                    </ul>
                </Grid>
                <Grid item xs={10}>
                    <div id="misdatos"><h2>Mis datos</h2>
                        <form>

                        </form>
                    </div>
                    <div id="miscompras">
                        <h2>Mis compras</h2>
                    </div>
                    <div id="wishlist">
                        <h2>Lista de deseos</h2>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </div> : <h4><Link to={"/login"}>Inicia sesión</Link> o <Link to={"/register"}>regístrate</Link></h4>}
    </>
}