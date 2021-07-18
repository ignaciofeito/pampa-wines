export const ItemDetailStyle = theme => {
    return({
        root: {
            marginTop: '2%',
            flexGrow: 1,
            },
        image: {
            padding: '10%',
            width: "40%",
            marginTop: "30px",
            marginLeft: "20%",
        },
        info: {
            padding: "10%",
        },
        button:{
            backgroundColor: 'lightgray',
            textDecoration: 'none',
            color: 'black',
            margin: '0% 3% 2% 3%',
            maxHeight: '40px',
        },
        contenedor: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}