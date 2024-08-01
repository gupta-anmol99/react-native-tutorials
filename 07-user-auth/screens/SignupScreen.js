import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/AuthContext";

function SignupScreen({navigation}) {
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleSignup = async ({ email, password }) => {
    setLoading(true);
    try {
      const token = await createUser(email, password);
      authCtx.login(token);
      // navigation.replace("Login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
   
    setLoading(false);
    
  };

  if (loading) {
    return <LoadingOverlay message="Creating Account..." />;
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
