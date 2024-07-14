'use client';

import { FaGoogle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Updated regex for password validation
const passwordRegex = /^(?!.*\s)(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={}\[\]|;:'",.<>?/`~\\-]{6,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!emailRegex.test(newEmail)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must be at least 6 characters and include at least one number."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLoginClick = () => {
    if (emailRegex.test(email)) {
      if (showPasswordField) {
        if (passwordRegex.test(password)) {
          // Both email and password are valid, handle log in
          // Here, you might want to submit the form or perform log in action
        } else {
          // Password is invalid
          setPasswordError(
            "Password must be at least 6 characters and include at least one number."
          );
        }
      } else {
        // Show password field
        setShowPasswordField(true);
      }
    } else {
      // Email is invalid
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="relative w-full flex flex-col lg:grid lg:grid-cols-2 lg:min-h-screen xl:min-h-screen">
      {/* Image section visible on small screens should be block instead of hidden 
      <div className="hidden lg:hidden relative w-full h-64 overflow-hidden">
        <Image
          src="/video-thumbnail/understanding-electromagnetism.jpeg"
          alt="Image"
          layout="fill"
          objectFit="cover"
          className="dark:brightness-[0.2] dark:grayscale"
        />
      </div>*/}

      {/* Content section */}
      <div className="relative flex-grow flex flex-col items-center justify-center py-12 lg:py-0">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign up/Welcome Back</h1>
            {/*<p className="text-balance text-muted-foreground">
              Enter your email below to log in to your account
            </p>*/}
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmailChange}
                className={emailError ? "border-red-500" : ""}
              />
              {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            </div>
            {showPasswordField && (
              <div className="grid gap-2">
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                  className={passwordError ? "border-red-500" : ""}
                />
                {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                <div className="flex items-center">
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
            )}
            <Button 
              type="button" 
              className="w-full mb-4"  // Add margin-bottom for spacing
              onClick={handleLoginClick}
            >
              {showPasswordField ? "Log in/Sign Up" : "Continue"}
            </Button>
            <div className="mt-4 text-center text-sm hidden">
              Don&apos;t have an account?{" "}
              <Link href="#" className="underline">
                Sign up
              </Link>
            </div>
            <div className="mt-4 text-center text-sm lg:hidden">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Log in
              </Link>
            </div>
            <div className="flex items-center my-4">  {/* Increased margin for spacing */}
              <div className="flex-grow border-t border-border"></div>
              <span className="mx-4 text-sm text-gray-500">or</span>
              <div className="flex-grow border-t border-border"></div>
            </div>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <FaGoogle className="w-4 h-4" /> {/* Adjust size as needed */}
              Continue with Google
            </Button>
          </div>
        </div>
        {/* Terms and Privacy Policy text moved to the bottom */}
        <div className="lg:absolute bottom-0 left-0 right-0 pt-10 px-8 py-4 pb-10 text-center text-sm text-muted-foreground">
          <a
            className="hover:text-primary"
            href="/terms"
          >
            Terms of Use
          </a>{" "}
           |{" "}
          <a
            className="hover:text-primary"
            href="/privacy"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>

      {/* Image section visible on large screens */}
      <div className="hidden lg:block relative w-full h-full">
        <Image
          src="/video-thumbnail/understanding-electromagnetism.jpeg"
          alt="Image"
          layout="fill"
          className="h-full w-full dark:brightness-[0.2] dark:grayscale"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-transparent via-black opacity-80"></div>
        <blockquote className="absolute bottom-4 left-4 text-white opacity-90 transition-opacity duration-1000 ease-in-out max-w-xxl p-9">
          <p className="text-lg">
            "This platform has saved me countless hours of wondering for pyqs that are reliable and it also has an amazing UI"
          </p>
          <footer className="text-sm mt-2">Bogus Binted</footer>
        </blockquote>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <Dashboard />
      </main>
    </div>
  );
};

export default LoginPage;
