import LoginComponent from '~/components/Login';
import ProtectedRoute from '~/components/ProtectedRoute';

const Login = () => {
    return (
        <ProtectedRoute redirect='login'>
            <LoginComponent />
        </ProtectedRoute>
    );
}

export default Login;
