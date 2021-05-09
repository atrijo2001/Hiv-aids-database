import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: '#000',
		color: '#fff',
        fontFamily: 'Bowlby One SC',
        padding: theme.spacing(1),
	},
}));

const Footer = () => {
    const classes = useStyles();
    return (
			<Typography variant='body2' color='textSecondary' align='center' className={classes.footer}>
				{' © '}
				{new Date().getFullYear()}
            {' - '}
            ALL RIGHTS RESERVED
			</Typography>
		);
}

export default Footer
