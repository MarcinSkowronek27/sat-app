import React, { useState } from 'react';
import styles from './form.module.scss';
import TextField from '@material-ui/core/TextField';
import Container from '@mui/material/Container';

export const FormFields = () => {

  const [orderFormData, setOrderFormData] = useState('');

  const handleSubmit = () => {
    console.log(orderFormData);
  }

  const handleOrderFormData = event => {
    setOrderFormData({
      ...orderFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <Container maxWidth='lg' className={styles.container}>
        <h2>Calculate your vehicle</h2>
        <form onSubmit={handleSubmit} noValidate autoComplete="off" action="/works" method="POST" encType="multipart/form-data">
          <TextField id="Distance" name="distance" label="Distance*" variant="outlined" 
              onChange={handleOrderFormData}
            />
            <TextField id="yearOfProduction" name="yearOfProduction" label="Year of Production*" variant="outlined" className={styles.textField}
              onChange={handleOrderFormData}
            />
            <TextField id="fuelUsage" name="fuelUsage" label="Fuel Usage per 100km*" variant="outlined" className={styles.textField}
              onChange={handleOrderFormData}
            />
          <button type="submit" className={styles.button}>Wyślij</button>
        </form>
        <div className='result-box'>
          <h3>Results:</h3>
        </div>
      </Container>
  );
}