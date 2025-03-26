import { Transition } from "@headlessui/react";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      {/* Background Image or Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>

      {/* Content */}
      <Transition
        appear
        show={true}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="relative z-10 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-pink-500">Zubayer</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A passionate Web Developer crafting interactive & scalable solutions.
          </p>
          <div className="mt-6">
            <Button variant="headless">Download Resume</Button>
          </div>
        </div>
      </Transition>
    </div>
  );
}
