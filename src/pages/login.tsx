import ProtectedRoute from '~/components/ProtectedRoute';
import LoginComponent from '~/components/Login';

const Login = () => {
    return (
        <ProtectedRoute redirect='login'>
            <LoginComponent />
        </ProtectedRoute>
    );
}

export default Login;
