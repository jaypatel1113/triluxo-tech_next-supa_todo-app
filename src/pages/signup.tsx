import ProtectedRoute from '~/components/ProtectedRoute';
import SignUpComponent from '~/components/SignUp';

const Login = () => {
    return (
        <ProtectedRoute redirect='signup'>
            <SignUpComponent />
        </ProtectedRoute>
    );
}

export default Login;
