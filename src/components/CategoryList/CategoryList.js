import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { CategoryListStyle } from './CategoryListStyle'

const useStyles = makeStyles((theme) => CategoryListStyle(theme))

export const CategoryList = () => {

    const classes = useStyles();

    return <>
        <div>
            <div className={classes.listFullScreen}>
            <h2 className={classes.title}>Categorías</h2>
                <ul className={classes.list}>
                    <li className={classes.li}><Link to={`/category/vinos`} className={classes.li}>Vinos</Link>
                        <ul className={classes.list}>
                            <Link to={`/category/vinos/malbec`} className={classes.li} ><li className={classes.li}>Malbec</li></Link>
                            <Link to={`/category/vinos/cabernet`} className={classes.li}><li className={classes.li}>Cabernet Sauvignon</li></Link>
                            <Link to={`/category/vinos/syrah`} className={classes.li}><li className={classes.li}>Syrah</li></Link>
                            <Link to={`/category/vinos/chardonnay`} className={classes.li}><li className={classes.li}>Chardonnay</li></Link>
                            <Link to={`/category/vinos/sauvignon-blanc`} className={classes.li}><li className={classes.li}>Sauvignon Blanc</li></Link>
                            <Link to={`/category/vinos/torrontes`} className={classes.li}><li className={classes.li}>Torrontes</li></Link>
                        </ul>
                    </li>
                    <li className={classes.li}><Link to={`/category/espumantes`} className={classes.li}>Espumantes</Link>
                        <ul className={classes.list}>
                            <Link to={`/category/espumantes/champagne`} className={classes.li} ><li className={classes.li}>Champagne</li></Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </>
}