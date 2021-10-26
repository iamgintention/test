/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @next/next/link-passhref */
import React, { useCallback } from "react"
import { useRouter } from "next/router"
import { auth } from "../../firebase/clientApp"
import { signInWithEmailAndPassword } from "firebase/auth"
import Link from "next/link"


// Material Icon 
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from '@material-ui/core/styles';
 
// --------------UI----------------------
// import file
// Next authentication
// Import Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/fontawesome-svg-core';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';


  // To scall toggle possword visibility
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const useStyles = makeStyles((theme) => ({
  materialIconStyle: {
    '& svg': {
      fontSize: 20
    }
  }
}));


const EmailPasswordAuthLogin = () => {
  const Router = useRouter()

  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value)
        Router.push("/")
      } catch (error) {
        console.log("error")
        alert(error)
      }
    },
    [Router]
  )

  // ------------------
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Call materialIconStyle
  const classes = useStyles();

  return (
    <div>
      <form onSubmit={loginHandler}>
        <h1 className="content-label">Sign in</h1>
          <div className="input-field-container">
            <div className="input-field-box input-field-box-margin">
          <FontAwesomeIcon icon={faUser} className="input-icon" size="lg" />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            id="email"
            type="email"
            placeholder="Enter email"
          />
            </div>
            <div className="input-field-box">
         <FontAwesomeIcon icon={faKey} className="input-icon" size="lg" />
          <input
            className=""
            name="password"
            id="password"
            type={values.showPassword ? "text" : "password"}
            onChange={handlePasswordChange("password")}
            value={values.password}
            placeholder="●●●●●●●●"
          />           
            <IconButton
              className={classes.materialIconStyle}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
            </div>
         </div>
            {/* SignUp button */}
            <button className="primary-button" type="submit">Sign in</button>
          {/* Forget password */}
          <Link href="sign-in/reset-password">
          <h4 role="button" className="forget-password">Forget Password?</h4>
          </Link>
          {/* Divider */}
          <div className="divider">
            <hr />
            <p>OR</p>
            <hr />
          </div>
      </form>
    </div>
  )
}

export default EmailPasswordAuthLogin
