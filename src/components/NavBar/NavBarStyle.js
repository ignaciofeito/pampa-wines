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
            color: 'black',
            textDecoration: 'none',
            fontFamily: 'Helvetica Neue, sans-serif',
            fontWeight: '600',
            letterSpacing: '-0.5px',
            margin: '2%',
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
        }
    })
}