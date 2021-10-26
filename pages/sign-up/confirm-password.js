// import
import Header from '../../components/HeaderForSignUpSignin';
import ConfirmPasswordCard from '../../Components/confirmPassword';

const ConfirmPassword = () => {
  return (
    <div className="confirm-password-main-body">
      {/* Here will be basic header */}
      <Header />

      {/* Here will be confirmPassword card */}
      <ConfirmPasswordCard/>

      {/* Here will be sign-up login footer */}
    </div>
  );
};

export default ConfirmPassword;
