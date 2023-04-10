import { useFormik } from "formik";
import "./Contacto.css";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { GlobalContext } from "../../../Context/GlobalContext";

const ContactoContainer = () => {
  const [user, setUser] = useState(false);
  const { state } = useContext(GlobalContext);

  const showDetail = () => {
    if (values.name !== "") {
      setUser(true);
    }
  };

  const { handleChange, handleSubmit, values, setFieldValue, errors } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
      },

      validationSchema: Yup.object({
        name: Yup.string().required("ingrese su nombre"),
        email: Yup.string().required("ingrese su email"),
      }),
      onSubmit: (data) => {
        console.log(data);
      },
    });

  return (
    <div className={state.isDark ? "container-dark" : "container-light"}>
      <Typography color="primary" variant="h3" align="center">
        Ingresa tus datos
      </Typography>
      <form className="formulario" onSubmit={handleSubmit}>
        <Grid
          container
          alignItems={"center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              name="name"
              label="ingresa tu nombre"
              variant="outlined"
              value={values.name}
              onChange={(e) => {
                setFieldValue("name", e.target.value);
              }}
              error={errors.name}
              helperText={errors.name}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              name="email"
              label="Ingrese su mail..."
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
              helperText={errors.email}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button type="submit" variant="outlined" onClick={showDetail}>
          Enviar
        </Button>
      </form>

      {user && (
        <h4>Gracias {values.name} te contactaremos cuanto antes via mail</h4>
      )}
    </div>
  );
};

export default ContactoContainer;
