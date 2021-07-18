export const ItemListContainerStyle = theme => {
    return ({
        row: { display: 'flex', },
        text: {
            color: 'black',
            'font-family': 'Montserrat, sans-serif',
            'font-style': 'italic',
            'font-size': '30px',
            'margin': '15%'
        },
        search: {
            position: 'relative',
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
              width: 'auto',
            },
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%',
          },
          inputRoot: {
            color: 'inherit',
            border: '0.3px solid lightgray',
            borderRadius: '8px',
            marginTop: '5%',
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: '20ch',
            },
          },
    })
}