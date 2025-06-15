import React from 'react';
import { Outlet } from 'react-router-dom';
import frontImg from './assets/front.jpg';  // adjust relative path if needed

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center">
                    <img 
                        src={frontImg}
                        alt="Welcome to ECommerce Shopping" 
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;