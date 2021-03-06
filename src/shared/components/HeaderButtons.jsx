import React from "react";
import Button from "react-bootstrap/Button";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

const HeaderButtons = ({ isLoggedIn, setLogin, cantCarrito }) => {
  const login = (res) => {
    setLogin(true);
    localStorage.setItem("token", res.tokenId);
    console.log(res);
  };

  const logout = () => {
    setLogin(false);
    localStorage.removeItem("token");
  };

  const loginError = (err) => {
    console.log(err);
  };

  if (isLoggedIn) {
    return (
      <React.Fragment>

        <Link to="/SistemaVentas">
          <Button variant="outline-dark" className="me-3">
            Ingresar Ventas
          </Button>
        </Link>

        {/* <Link to="/Carrito">
          <Button variant="danger" className="me-3">
            Carrito <Badge bg="primary">{cantCarrito}</Badge>
          </Button>
        </Link> */}

        <Link to="/VentasRealizadas">
          <Button variant="outline-dark" className="me-3">
            Gestionar Ventas
          </Button>
        </Link>

        <Link to="/CrearProducto">
          <Button variant="outline-dark" className="me-3">
            Ingresar producto
          </Button>
        </Link>

        <Link to="/Gestion">
          <Button variant="outline-dark" className="me-3">
            Gestionar Productos
          </Button>
        </Link>

        <Link to="/CrearUsuario">
          <Button variant="outline-dark" className="me-3">
            Crear Usuarios
          </Button>
        </Link>

        <Link to="/TablaGestorUsuario">
          <Button variant="outline-dark" className="me-3">
            Gestion Usuarios
          </Button>
        </Link>

        <Link to="/">
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        </Link>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <GoogleLogin
          clientId="1072646916283-tuqtgn75i6kb0p8u8reg1u75d9n88id3.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={login}
          onFailure={loginError}
          cookiePolicy={"single_host_origin"}
        />
        

      </div>
    );
  }
};

export default HeaderButtons;