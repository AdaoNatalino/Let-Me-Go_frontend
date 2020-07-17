import React from 'react'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';



export default function NotFound404() {
    return (
        <div>
            <Link color="inherit" href="/">
                <Button   
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Go Back
                </Button>
            </Link>
            <img src="https://miro.medium.com/max/1050/1*x6rWRLF6snmC2p1C8ffdzA.png" alt=""/>
            {/* <p style={{textAlign:"center"}}>
            <Link color="inherit" href="/"> Go to Home </Link>
            </p> */}
          </div>
    )
}
