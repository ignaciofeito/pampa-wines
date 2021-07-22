export const NavBarStyle = theme => {
    return ({
        root: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: 'white',
            minHeight: '90px',
            [theme.breakpoints.down('xs')]: {
                minHeight: '0',
            }
        },
        button: {
            minWidth: '32px',
            color: 'black',
            textDecoration: 'none',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '600',
            fontSize: '18px',
            margin: '2%',
        },
        avatar: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            margin: 'auto',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto',
        },
        logo:{
            width: '100%',
        },
        navbar: {
            color: 'black',
            display: 'flex',
            listStyle: 'none',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            margin: 'auto',
        },
        listSmallScreen: {
            display: 'flex',
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            }
        },
        listFullScreen: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            }
        },
    })
}