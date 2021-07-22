export const ItemStyle = theme => {
    return ({
        root: {
            minHeight: 400,
            [theme.breakpoints.down('sm')]: {
                minHeight: 420,
                border: 'none',
                boxShadow: 'none'
            },
            maxWidth: 280,

        },
        media: {
            maxWidth: '70%',
            margin: "auto",
            height: 250,
        },
        link: {
            textDecoration: 'none',
            color: 'black',
        },
        cardText:{
            minHeight: '70px',
            letterSpacing: '-0.2px',
                textShadow: '0.1px 0.1px 0.5px gray',
            [theme.breakpoints.down('sm')]: {
                fontSize: '16px',
                minHeight: '70px',
                letterSpacing: '-0.2px',
                textShadow: '0.1px 0.1px 0.5px gray',
            },
        },
        cardPrice:{
                letterSpacing: '-0.2px',
                textShadow: '0.1px 0.1px 0.5px gray',
            [theme.breakpoints.down('sm')]: {
                fontSize: '15px',
                textAlign: 'center',
            },
        }
    })
}