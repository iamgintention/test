// Import components
import EmailPasswordAuthLogin from "../components/signup-signin-components/emailPasswordAuthLogin"
import GoogleSignIn from "../components/signup-signin-components/googleSignIn"
import FacebookSignIn from "../components/signup-signin-components/facebookSignIn"


const SigninCard = () => {
  return (
   <div className="main-caintainer-to-sign-up-sign-in-proces">
      <div className="elements-container">
       <EmailPasswordAuthLogin />
       <div className="third-party-primary-button-container">
        <GoogleSignIn />
        <FacebookSignIn />
        </div>
      </div>
    </div>
  );
};

export default SigninCard;
