import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

export function ItemListContainer(props) {
    return <Container maxwidth="sm">
        <Typography variant="h3">
            {props.greeting}
        </Typography>
    </Container>
}