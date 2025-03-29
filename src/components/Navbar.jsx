import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Button from './ui/Button';
import Contact from './contact/Contact';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "FAQ", link: "#faq" },
]

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-pink-500 text-2xl font-semibold">
          Zubayer
        </a>
        <div className="hidden md:flex space-x-4">
          {navItems.map(item => <a href={item.link} className="text-white border-b-2 border-gray-800 hover:border-pink-500">{item.name}</a>)}
        </div>
        {/* <Button variant="headless">Contact</Button> */}
        <Menu as="div" className="relative md:hidden">
          <Menu.Button className="text-white">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-20  mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-1">
                {navItems.map(item => <Menu.Item>
                  {({ active }) => (
                    <a
                      href={item.link}
                      className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm')}
                    >
                      {item.name}
                    </a>
                  )}
                </Menu.Item>)}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}
