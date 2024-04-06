"use client";
import Link from "next/link";
import * as React from 'react'
import { Button } from "../components/button";



export default function Component() {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 bg-white text-black">
        <div className="flex items-center">
          <Link href="/">
            <MountainIcon className="h-8 w-8" />
          </Link>
          <span className="text-lg font-medium ml-2">SAFE-ZONE</span>{" "}
        </div>
        <nav className="md:flex gap-8 hidden">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="/pages/login"
          >
            Safe
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="/pages/login"
          >
            Subscribe
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="/pages/login" // Link to the About section
          >
            Posts
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="/pages/login"
          >
            Volunteer
          </Link>
        </nav>
        <Link href="/pages/login">
            <Button
              className="text-lg font-medium hidden border-black border-2 md:inline-flex p-1 rounded-xl"
              variant="outline"
            >
              Login
            </Button>
        </Link>
        <div className="md:hidden">
          <Button
            onClick={toggleMobileMenu}
            className="inline-flex p-1 rounded-xl  border-black border-2"
            variant="outline"
          >
            Menu
          </Button>
          {isMobileMenuVisible && (
            <div className="absolute top-16 right-0 w-48 py-2 bg-white rounded-lg shadow-md flex flex-col gap-2">
              <Link className="p-2" href="/pages/login">
                Safe
              </Link>
              <Link className="p-2" href="/pages/login">
                Subscribe
              </Link>
              <Link className="p-2" href="/pages/login">
                Posts
              </Link>
              <Link className="p-2" href="/pages/login">
                Volunteer
              </Link>
              <Link className="p-2" href="/pages/login">
                login
              </Link>
            </div>
          )}
        </div>
      </header>
      <main className=" bg-white text-black flex flex-col items-center justify-center flex-grow">
        <div
          id="features"
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Welcome to SAFE<span className="text-green-500">ZONE</span> Inc .
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing..
            </p>
          </div>
          <div className="w-full max-w-md">
            <img
              alt="Chatbot"
              src="https://img.freepik.com/free-vector/patent-law-concept-illustrated_23-2148739016.jpg?size=626&ext=jpg&ga=GA1.1.1359882910.1712348428&semt=aishttps://mymodernmet.com/wp/wp-content/uploads/2023/01/ai-chatbots.jpg"
              className="w-full h-auto object-cover object-center rounded-lg shadow-md"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
            />
            {/* <div className="w-full h-auto object-cover object-center rounded-lg shadow-md">
            <lottie {...props as LottieProps} animationData ={animationData}/>
            </div> */}
          </div>
        </div>

        <section
          id="features"
          className="flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Features</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover the amazing features of our app.
          </p>
        </section>
        <section
          id="about"
          className="flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            This is the About section where you can describe your company or
            organization.
          </p>
        </section>
        <section
          id="contact"
          className="flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Get in touch with us for more information.
          </p>
        </section>
      </main>
    </div>
  );
}

interface MountainIconProps extends React.SVGProps<SVGSVGElement> { }

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
