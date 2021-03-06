import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    debit: {
        backgroundColor: "#00B1E1"
    },
    credit: {
        backgroundColor: "#37BC9B"
    }
});

const SimpleExpansionPanel = ({ classes, data }) => {
return (
<div className={classes.root}>
{
    data.map((e, i) => {
        const color = (e.cardType === 'debit') ? classes.debit : classes.credit
        return(
            <ExpansionPanel key={i} className={color}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography className={classes.heading}>Transaction type: {e.cardType}   mount: {e.amount}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                    Transaction Type: {e.cardType}
                    <br/>
                    amount: {e.amount}
                    <br/>
                    effective Date: {e.effectiveDate}
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    })
}
</div>
);
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);