import React, {useState, useEffect} from 'react';
import './HomeStyle.css'

export const Home = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true);
    }, [])

    return <>
        {loaded ? <div className="contenedor fade-in">
            <div className="greeting">
                <h1 className="tracking-in-expand">PAMPA WINES</h1>
                <h2 className="tracking-in-expand">Bebidas</h2>
            </div>
        </div> : null}
    </>
}