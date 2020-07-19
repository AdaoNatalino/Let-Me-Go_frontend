import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



import API from '../../API';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Let Me Go!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewItemForm({ user }) {
  const classes = useStyles();

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [condition, setCondition] = useState("")
  const [category_id, setCategory_id] = useState("")
  const [image, setImage] = useState("")
  const user_id = user.id  
  const [categories, setCategories] = useState([])

  const [photo, setPhoto] = useState("")
  const [loading, setLoading] = useState(false)

  let history = useHistory();

  useEffect(()=>{
    API.getAllCategories().then(cat => setCategories(cat))
  },[])

  const handleCreateItem = (e) => {
    e.preventDefault();
    const itemData = { name, description, condition, category_id, image, user_id }
    console.log(itemData)
    // history.push('/profile')
    API.createNewItem(itemData)
    clearForm();
  };

  const clearForm = () => {
    setName("")
    setDescription("")
    setCondition("")
    setCategory_id("")
    setImage("")
  
  }

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "sansonov")
    setLoading(true)
    const res = await fetch("https://api.cloudinary.com/v1_1/dgvhmuqlq/image/upload",{
       method: "POST",
       body: data 
    })
    const file = await res.json()
    setPhoto(file.secure_url)
    setLoading(false)
  }

  const categoriesOptions = () =>  categories.map(cat => <option key={cat.id} value={cat.id}>{cat.title}</option> )

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CloudUploadIcon  />
        </Avatar>
        <Typography component="h1" variant="h5">
          Upload an item for trade!
        </Typography>
        <form className={classes.form} noValidate onSubmit={ handleCreateItem }>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setName(e.target.value) }
                value={name}
                autoComplete="name"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setDescription(e.target.value) }
                value={description}
                autoComplete="description"
                name="Description"
                variant="outlined"
                required
                fullWidth
                id="Description"
                label="Description"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setCondition(e.target.value) }
                value={condition}
                autoComplete="condition"
                name="Condition"
                variant="outlined"
                required
                fullWidth
                id="Condition"
                label="Condition"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
                <FormControl variant="outlined" className={classes.form}>
                    <InputLabel htmlFor="outlined-category-native-simple">Category*</InputLabel>
                    <Select
                    native
                    onChange={ (e) => setCategory_id(e.target.value) }            
                    label="Category"
                    inputProps={{
                        name: 'category',
                        id: 'outlined-category-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    { categoriesOptions() }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField onChange={ (e) => setImage(e.target.value) }
                value={image}
                autoComplete="image"
                name="Image"
                variant="outlined"
                required
                fullWidth
                id="image"
                label="Image"
                autoFocus
              />
            </Grid>
            <input type="file"
            name="file"
            placeholder="Upload a image"
            onChange={uploadImage}
            
            />
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Upload Item
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/profile" variant="body2">
                Back to Profile
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
{/* 
        {loading? (
            <h3>Loading...</h3>
        ):(
            <img src={photo} style={{width: '300px'}}/>
        )} */}

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}