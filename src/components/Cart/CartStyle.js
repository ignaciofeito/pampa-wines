export const CartStyle = theme => {
    return ({
        title:{
            fontFamily: 'Playfair Display, serif',
        },
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: '25ch',

            },
        },
        form: {
            border: '0.3px solid lightgray',
            borderRadius: '8px',
            textAlign: 'center',
        },
        img: {
            width: "60%",
            margin: "auto",
        },
        tableContainer: {
            margin: "4%",
            padding: "2%",
        },
        table: {
            padding: "2%",
            borderRadius: '8px',
            border: '0.3px solid lightgray',
            margin: "auto",
            textAlign: "center",
        },
        btnBuy: {
            backgroundColor: 'lightgray',
            textDecoration: 'none',
            color: 'black',
            fontWeight: 'bold',
            padding: '2%',
            margin: 'auto',
            marginLeft: '3%',
            minHeight: '40px',
            width: '25ch',
        },
        btnDel: {
            textDecoration: 'none',
            fontSize: '16px',
            color: 'darkred',
            fontWeight: 'bold',
        }
    })
}