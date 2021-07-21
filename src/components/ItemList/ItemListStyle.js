export const ItemListStyle = theme => {
    return ({
        root: {
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: {
                margin: 'auto',
            },
        },
        title: {
            fontFamily: 'Playfair Display, serif',
        },
        itemCard: {
            [theme.breakpoints.down('sm')]: {
                justifyContent: 'center',
            },
        }
    })
}