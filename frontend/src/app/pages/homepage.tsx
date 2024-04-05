import Link from "next/link";
import { Button } from "../components/button";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 bg-white text-black">
        <div className="flex items-center">
          <Link href="#">
            <MountainIcon className="h-8 w-8" />
          </Link>
          <span className="text-lg font-medium ml-2">SALVUS</span>{" "}
          {/* Name alongside the mountain photo */}
        </div>
        <nav className="md:flex gap-8 hidden">
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#about" // Link to the About section
          >
            About
          </Link>
          <Link
            className="text-lg font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact Us
          </Link>
        </nav>
        <Button
          className="hidden border-black border-2 md:inline-flex"
          variant="outline"
        >
          Login
        </Button>
        <div className="md:hidden">
          <Button className="inline-flex" variant="outline">
            Menu
          </Button>
          <div className="absolute top-16 right-0 w-48 py-2 bg-white rounded-lg shadow-md flex flex-col gap-2">
            <Link
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200"
              href="#"
            >
              Home
            </Link>
            <Link
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200"
              href="#about" // Link to the About section
            >
              About
            </Link>
            <Link
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200"
              href="#contact"
            >
              Contact Us
            </Link>
            <Link
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200"
              href="#contact"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <main className=" bg-white text-black flex flex-col items-center justify-center flex-grow">
        <div
          id="features"
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Welcome to SAL<span className="text-green-500">VAS</span> Inc .
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing..
            </p>
          </div>
          <div className="w-full max-w-md">
            <img
              alt="Chatbot"
              src="https://mymodernmet.com/wp/wp-content/uploads/2023/01/ai-chatbots.jpg"
              className="w-full h-auto object-cover object-center rounded-lg shadow-md"
              style={{
                aspectRatio: "500/500",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <section
          id="features"
          className="flex flex-col items-center justify-center gap-8 md:gap-12 max-w-6xl mx-auto px-8 py-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Features</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Discover the amazing features of our AI chatbot.
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
