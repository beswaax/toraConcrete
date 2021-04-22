import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
  contactWrapper: {
    backgroundColor: fade(theme.palette.background.emphasis, .2),
  },
  iconWrapper: {
    backgroundColor: fade(theme.palette.background.emphasis, .6),
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    'contact1': 'Address',
    'contact1-desc1': '1652 Cordia Cir',
    'contact1-desc2': ' Newton, North Carolina(NC), 28658',
    'contact2': 'Email',
    'contact2-desc': 'hello@mui.dev',
    'contact3': 'Phone',
    'contact3-desc': '(318) 285-9856',
    ...props.content
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>{content['contact1']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact1-desc1']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact1-desc2']}</Typography>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>{content['contact2']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact2-desc']}</Typography>
                  <br />
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.contactWrapper}>
                <Box textAlign="center" py={4}>
                  <Box display="flex" justifyContent="center" mb={3}>
                    <Avatar className={classes.iconWrapper}>
                      <PhoneIcon color="primary" fontSize="small" />
                    </Avatar>
                  </Box>
                  <Typography variant="h6" gutterBottom={true}>{content['contact3']}</Typography>
                  <Typography variant="body2" color="textSecondary">{content['contact3-desc']}</Typography>
                  <br />
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}