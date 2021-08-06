export const CategoryListStyle = theme => {
    return ({
        title: {
            fontFamily: 'Playfair Display, serif',
        },
        listFullScreen: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            }
        },
        listSmallScreen: {
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            }
        },
        button: {
            backgroundColor: 'lightgray',
            textDecoration: 'none',
            color: 'black',
            margin: '0% 3% 2% 3%',
            maxHeight: '40px',
        },
        list: {
            color: 'black',
            padding: '5%',
            fontSize: '16px',
            textDecoration: 'none',
            listStyle: 'none',
        },
        li: {
            color: 'black',
            textDecoration: 'none',
            marginTop: '5%',
        }
    })
}