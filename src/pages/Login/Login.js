import React, { useEffect } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {
    const {register, formState: {errors}, handleSubmit, getValues} = useForm();
    const [
        signInWithEmailAndPassword,
        loginUser,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if(loginUser || gUser) {
            fetch('https://organic-grocer-warehouse-server.onrender.com/login', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginUser.user.email || gUser.user.email
                }),
                
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('accessToken', data.token)
                navigate(from, {replace: true});
            })
            
        }
    }, [loginUser, gUser, from, navigate]);

    if(loading || gLoading || sending){
        return <Loading />
    }
    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }
    const onSubmit = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
    }

    const handleReset = async () => {
        const email = getValues("email");
        if(email){
            await sendPasswordResetEmail(email);
            toast.success("Sent email")
        }
    }
    return (
        <div className='flex justify-center items-center mt-5 mb-5'>
            <div className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-accent">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                type="email"
                                name="email"
                                placeholder="Your email"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or more longer'
                                    }
                                })}
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p><small>Forgot Password? <button onClick={handleReset} className='text-accent'>Reset Password</button></small></p>
                        {signInError}
                        <input className='btn bg-accent text-white w-full max-w-xs mt-1' type="submit" value="Login" />
                    </form>
                    <p><small>New to Organic Grocer? <Link className='text-accent' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline uppercase">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;