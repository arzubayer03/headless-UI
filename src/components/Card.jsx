import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import Button from './ui/Button'

export default function Card({ title, description, image, link }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Project Image */}
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      {/* Overlay Effect */}
      <Transition
        as={Fragment}
        show={hovered}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm mt-2">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            View Project
          </a>
        </div>
      </Transition>
    </div>
  );
}
