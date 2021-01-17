
import React, { useState } from 'react'; 
import { isValidCpf } from '@brazilian-utils/validators';
import InputMask from 'react-input-mask';
import { 
    FormControl, 
    FormControlLabel,
    RadioGroup,
    Radio,
    TextField, 
    Grid, 
    Button } from '@material-ui/core'; 
import SideBar from '../components/sidebar';   
import { Formik, Form } from 'formik';
import servicesApi from '../services/servicesApi';
import Footer from '../components/Footer' 
import * as Yup from 'yup';


// Validações
const validationSchema = Yup.object().shape({
  name:  Yup.string()
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚãõÃÕ]+(?:\s[a-zA-ZáéíóúÁÉÍÓÚãõÃÕ]+)+$/, 'Insira um nome válido!')
    .required('Nome é obrigatório'),

    cpf: Yup.string()
      .matches(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/, 'Insira um CPF válido!')
      .test('cpfValidation', 'Insira um CPF válido!', (value) => isValidCpf(value))
      .required('CPF é obrigatório'),
 

  email: Yup.string().email('Insira um email válido!'),

  birthday: Yup.string()
    .matches(/^(?:0[1-9]|[12]\d|3[01])([/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/, 'Insira uma data de nascimento válida!') 
    .required('A data de nascimento é obrigatória'),
 
   
});

const FormRegister = props => { 
  
  const person = { 
    name: null, 
    cpf: null, 
    gender: null,
    email: null, 
    birthday: null,
    placeBirth: null,
    countryBirth: null    
  }

  const [selectedRadio, setselectedRadio] = useState('FEMALE')

  const [initialValues] = useState({
      name: '',
      cpf: '', 
      gender:'',
      email: '',
      birthday: '',
      placeBirth: '',
      countryBirth: ''
  });

  const handleRadioChange = (event) => {
    setselectedRadio(event.target.value)
  }
 

  const formataStringData = (data) => {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2]; 
    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2); 
  }

  const handleSubmit = async (values ) => {   
    person.name = values.name
    person.cpf = values.cpf.replace(/[^\d]/g, "")
    person.gender = selectedRadio
    person.email = values.email
    person.placeBirth = values.placeBirth
    person.countryBirth = values.countryBirth 
    person.birthday = formataStringData(values.birthday)

    console.log( "person " ,  person);

    servicesApi.create(person)
    .then((res) => {
      console.log(res)
      sessionStorage.setItem('register', JSON.stringify(res));
    }) 
    .catch((err) => {
      console.error(err);
    });
  }
  
 return (
   <>
    <div className="App">

      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />  
      <br />
 
        <Grid container className="App-container"
            spacing={2}
            direction="row"
            alignItems="center"
            justify="center"> 
          
            <Grid item xs={10} md={10} > 

            <Grid item xs={12} md={8}>

              <h1> Novo Registro </h1>

              <br />
              </Grid>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                      handleSubmit(values);
                  }}
            >
              {({ values, touched, errors, handleChange, handleBlur }) => (
                <Form  >

                  <Grid container spacing={3}>  

                      <Grid item xs={12} md={8}>
                          <TextField
                            name="name"
                            label="Nome Completo"
                            value={values.name}
                            fullWidth
                            size="small"
                            error={errors.name && touched.name}
                            helperText={errors.name && touched.name && errors.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12} md={5}>
                          <TextField
                            name="email"
                            label="Email"
                            value={values.email}
                            fullWidth
                            size="small"
                            error={errors.email && touched.email}
                            helperText={errors.email && touched.email && errors.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12} md={3}>
                          <InputMask
                            mask="999.999.999-99"
                            value={values.cpf}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {() => (
                              <TextField
                                name="cpf"
                                label="CPF"
                                value={values.cpf}
                                helperText={errors.cpf && touched.cpf && errors.cpf}
                                fullWidth
                                size="small"
                                error={errors.cpf && touched.cpf}
                                variant="outlined"
                              />
                                          )}
                          </InputMask>
                        </Grid>
          
                        <Grid item xs={12} md={5}>
                          <InputMask
                            mask="99/99/9999"
                            value={values.birthday}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            {() => (
                              <TextField
                                name="birthday"
                                label="Data de Nascimento"
                                value={values.birthday}
                                fullWidth
                                size="small"
                                error={errors.birthday && touched.birthday}
                                helperText={errors.birthday && touched.birthday && errors.birthday}
                                variant="outlined"
                              />
                                          )}
                          </InputMask>
                        </Grid>


                        <Grid item xs={12} md={3}>
                            <FormControl component="fieldset" fullWidth> 

                                <RadioGroup
                                  arya-label="gender" 
                                  id="gender"
                                  name="gender"
                                  value={selectedRadio}
                                  onChange={handleRadioChange}   
                                >
                                  <FormControlLabel
                                    label="Feminino" 
                                    value="FEMALE"
                                    control={<Radio color="primary" />} 
                                  />
                                  <FormControlLabel
                                    label="Masculino"
                                    value="MALE"
                                    control={<Radio color="primary" />}
                                  />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
    
                        <Grid item xs={12} md={8}>
                          <TextField
                            name="placeBirth"
                            label="Naturalidade"
                            value={values.placeBirth}
                            fullWidth
                            size="small"
                            error={errors.placeBirth && touched.placeBirth}
                            helperText={errors.name && touched.placeBirth && errors.placeBirth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                          />
                        </Grid>

                        <Grid item xs={12} md={8}>
                          <TextField
                            name="countryBirth"
                            label="País de origim"
                            value={values.countryBirth}
                            fullWidth
                            size="small"
                            error={errors.countryBirth && touched.countryBirth}
                            helperText={errors.name && touched.countryBirth && errors.countryBirth}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            variant="outlined"
                          />
                        </Grid>
                        
                        <Grid item xs={12} md={8}> 
                            <Button type="submit" variant="contained" color="primary"  fullWidth
                            size="small" >
                                Salvar
                            </Button> 
                        </Grid> 
                      </Grid>
                </Form>
                  )}
              </Formik> 
              </Grid>
            </Grid>

            <Footer pageWrapId={"page-wrap"} /> 
        </div>
      </>
    );

}
export default FormRegister
 