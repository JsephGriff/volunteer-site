import React, { useState } from 'react';
import Link from "next/link"
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import SignInPopup from 'components/SignInPopup';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: 'Encode Sans Compressed, sans-serif',
    maxWidth: 800,
    minHeight: 600,
    margin: '0 auto',
    padding: 20,
    marginTop: '2rem',
    marginBottom: '2rem',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
  },
  buttonContainer: {
    marginTop: '1.5rem',
    display: 'flex',
    gap: '1rem',
  },
}));

const AuthorizationMessage = ({ user }) => {
  const classes = useStyles();
  const [isSignInPopupOpen, setSignInPopupOpen] = useState(false);

  return (
    <div className={`${classes.root} ${classes.message}`}>
      <div style={{ marginBottom: '1rem' }}>
        Sign-in with registered account to view page
      </div>
      <div className={classes.buttonContainer}>
        {!user ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSignInPopupOpen(true)}
            tabIndex={0}
          >
            Sign In
          </Button>
        ) : null}
        <Link href="/">
          <Button variant="outlined">
            Return
          </Button>
        </Link>
      </div>
      <SignInPopup open={isSignInPopupOpen} close={() => setSignInPopupOpen(false)} />
    </div>
  );
};

export default AuthorizationMessage;
