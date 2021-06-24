export const ItemDetailStyle = theme => {
    return({
        root: {
            marginTop: '2%',
            flexGrow: 1,
            boxShadow: '20px 10px 30px gray',
            border: '1px solid lightgray',
            borderRadius: '15px',
        },
        image: {
            padding: '10%',
            width: "50%",
            marginTop: "30px",
            marginLeft: "20%",
        },
        info: {
            padding: "10%",
        },
        button:{
            backgroundColor: 'lightgray',
            padding: '2%',
            margin: 'auto',
            maxHeight: '40px',
        },
        contenedor: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })
}