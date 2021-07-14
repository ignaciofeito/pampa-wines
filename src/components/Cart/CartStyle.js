export const CartStyle = theme => {
    return ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(2),
                width: '25ch',
            },
        },
        img: {
            width: "60%",
            margin: "auto",
        },
        tableContainer:{
            borderRight: "0.5px solid gray",
            margin: "4%",
            padding: "2%",
        },
        table: {
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
            width:  '25ch',
        }
    })
}