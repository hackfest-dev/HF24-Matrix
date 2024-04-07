  "use client";
  import Link from "next/link";
  import * as React from "react";
  import { Label } from "../../../components/ui/label";
  import { Input } from "../../../components/ui/input";
  import { Button } from "../../../components/ui/button";
  import { useRouter } from "next/navigation";
  import { useState } from "react";
  import axios from 'axios';
  
  export default function Register() {
    const router = useRouter();
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSignUp = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/api/v1/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });

        if (response.ok) {
          router.push("/pages/login"); 
        } else {
          console.error("Sign up failed");
        }
      } catch (error) {
        console.error("Sign up failed:", error);
      } finally {
        setIsLoading(false);
        setUsername("")
        setEmail("");
        setPassword("");
      }
    };

    return (
      <>
        <header className="py-10.5 h-5 lg:py-14.5 bg-black py-4">
          <div className="container grid items-center gap-4 px-4 lg:gap-8 lg:px-6 xl:px-8">
            <Link href="#">
              <div className="flex items-center space-x-2 cursor-pointer text-white">
                <MountainIcon className="w-8 h-8" />
                <span className="text-2xl font-bold text-white">Safe-Zone</span>
              </div>
            </Link>
          </div>
        </header>
        <div className="min-h-screen text-black flex items-center justify-center bg-black">
          <div className="w-full py-6 space-y-4 md:py-12 lg:space-y-6 xl:space-y-8 rounded-lg">
            <div className="mx-auto max-w-sm px-4 space-y-4">
              <div className="space-y-2 text-center">
                <h1 className="text-2xl text-white font-bold">
                  Create an account
                </h1>
              </div>
              <div className="space-y-4 text-white">
                <div className="space-y-2 text-white">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    className="bg-black"
                    id="username"
                    placeholder="Enter your username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2 text-white">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    placeholder="Password"
                    id="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  onClick={handleSignUp}
                  className="w-full bg-white text-black"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </Button>
                <div className="w-full flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    Already have an account?
                    <Link className="underline" href="/Pages/login">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  interface MountainIconProps extends React.SVGProps<SVGSVGElement> {}

  function MountainIcon(props: MountainIconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    );
  }
