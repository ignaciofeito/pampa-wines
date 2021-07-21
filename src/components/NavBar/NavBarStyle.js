export const NavBarStyle = theme => {
    return ({
        root: {
            flexGrow: 1,
        },
        appBar: {
            backgroundColor: 'white',
            minHeight: '90px',
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
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: 'auto'
        },
        navbar: {
            color: 'black',
            display: 'flex',
            listStyle: 'none',
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            justifyContent: 'center',
        }
    })
}