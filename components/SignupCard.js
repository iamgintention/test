// Import components
import EmailPasswordAuthSignUp from "../components/signup-signin-components/emailPasswordAuthSignup"
import GoogleSignIn from "../components/signup-signin-components/googleSignIn"
import FacebookSignIn from "../components/signup-signin-components/facebookSignIn"


const SignupCard = () => {

  return (
    <div className="main-caintainer-to-sign-up-sign-in-proces">
      <div className="elements-container">
       <EmailPasswordAuthSignUp />
       <div className="third-party-primary-button-container">
        <GoogleSignIn />
        <FacebookSignIn />
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
