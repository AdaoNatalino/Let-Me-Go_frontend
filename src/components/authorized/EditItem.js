import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";


import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
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

export default function EditItem( props ) {
  const classes = useStyles();

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [condition, setCondition] = useState("")
  const [category_id, setCategory_id] = useState("")
  const [imageFile, setImageFile] = useState(null)
  const [image, setImage] = useState(null)
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  
  const user_id = props.user.id  
  let history = useHistory();

  useEffect(()=>{
    API.getAllCategories().then(cat => setCategories(cat))
    API.getChosenItem(props.match.params.id).then(resp => setItemAttributes(resp))
  },[])

  const setItemAttributes = (resp) => {
    setName(resp.name)
    setDescription(resp.description)
    setCondition(resp.condition)
    setImage(resp.image) 
  }


  const handleUpdateItem = (e) => {
    e.preventDefault();
    const itemData = { name, description, condition, category_id, image, user_id }
    console.log(itemData)
    API.updateItemInfo(itemData, props.match.params.id)
    .then(console.log)
    history.push('/profile')
    clearForm();
  };


  const clearForm = () => {
    setName("")
    setDescription("")
    setCondition("")
    setCategory_id("")
    setImage("")
  
  }

  const updateImageFile = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append("upload_preset", "sansonov")
    setImageFile(data)
  }


  const uploadImage = () => {
    setLoading(true)
    fetch("https://api.cloudinary.com/v1_1/dgvhmuqlq/image/upload",{
       method: "POST",
       body: imageFile, 
    })
    .then( r => r.json() )
    .then( file => {
      setImage(file.secure_url)
      setLoading(false)
    })
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
          Update your item for trade!
        </Typography>
        <form className={classes.form} noValidate onSubmit={ handleUpdateItem }>
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
              <FormControl variant="outlined" className={classes.form}>
                <Input type="file" 
                fullWidth
                margin="dense"
                disableUnderline
                name="file" 
                placeholder="Upload a image"
                onChange={ updateImageFile }
                />
                <Button onClick={ uploadImage }
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                  >
                  Confirm Upload Image File...
                </Button>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
                {loading? (
                  <h3>Loading...</h3>
                   ):(
                  <img src={image} style={{width: '250px'}} alt=""/>
                  )}
            </Grid>
          </Grid>

          { image ? 
          
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          >
          Upload Item for Trade
          </Button>  

          : null}
         
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/profile" variant="body2">
                Back to Profile
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}