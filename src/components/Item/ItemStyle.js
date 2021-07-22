export const ItemStyle = theme => {
    return ({
        root: {
            minHeight: 400,
            [theme.breakpoints.down('sm')]: {
                minHeight: 420,
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
        }
    })
}