import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../util/auth";
import { Alert } from "react-native";
import { AuthContext } from "../store/AuthContext";

function LoginScreen() {
  const [loading, setLoading] = useState(false);

  const authCtx = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    setLoading(true);
    try {
      const token = await loginUser(email, password);
      authCtx.login(token);
    } catch (error) {
      Alert.alert("Login Failed!", " Please check your credentials");
      console.log(error.response.data.error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent onAuthenticate={handleSubmit} isLogin />;
}

export default LoginScreen;
