export const ItemDetailStyle = theme => {
    return ({
        root: {
            marginTop: '2%',
            flexGrow: 1,
        },
        imgContainer: {
            display: 'flex',
            justifyContent: 'center',
        },
        image: {
            width: "40%",
            [theme.breakpoints.down('sm')]: {
                marginTop: "5%",
            },
            [theme.breakpoints.up('sm')]: {
                marginTop: "30px",
                padding: '10%',
            },
        },
        title: {
            fontFamily: 'Playfair Display, serif',
            [theme.breakpoints.down('sm')]: {
                fontSize: "20px",
            },
        },
        info: {
            padding: "0% 10% 10% 10%",
        },
        button: {
            backgroundColor: 'lightgray',
            textDecoration: 'none',
            color: 'black',
            margin: '5%',
            maxHeight: '40px',
        },
        contenedor: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}