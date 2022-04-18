import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import fb from '../../../images/social/fb.jpg';
import github from '../../../images/social/github.png';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, gitLoading, gitError] = useSignInWithGithub(auth);
    // const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    let errorElement;

    if (googleError || gitError) {
        errorElement = <p className='text-danger'>Error: {googleError?.message} {gitError?.message}</p>
    }

    if (googleLoading || gitLoading) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>
                <p className='mt-2 p-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'>

                </div>

            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} src={google} alt=''></img>
                    <span className='ps-2'>Continue With Google</span>
                </button>
                <button
                    // onClick={() => signInWithFacebook()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} src={fb} alt=''></img>
                    <span className='ps-2'>Continue With Facebook</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-3'>
                    <img height={20} className='me-3' src={github} alt=''></img>
                    <span className='ps-2'>Continue With Github</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;