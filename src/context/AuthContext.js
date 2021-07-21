import React, { useState, useContext } from 'react'

export const AuthContext = React.createContext([]);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = props => {

    const [logged, setLogged] = useState(false);
    const [usermail, setUsermail] = useState();
    const [username, setUsername] = useState();
    const [userphone, setUserphone] = useState();

    const changeLogged = (email, username, userphone) => {
        setLogged(true);
        setUsermail(email);
        setUsername(username);
        setUserphone(userphone);
    }

    return (
        <AuthContext.Provider value={{ logged, changeLogged, usermail, username, userphone }}>
            {props.children}
        </AuthContext.Provider>
    );
};