import { Dialog, Transition, DialogPanel, DialogTitle, Checkbox, Select  } from '@headlessui/react';
import { Fragment, useState } from 'react';
import clsx from 'clsx'
import { CheckIcon } from '@heroicons/react/16/solid'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { LuMinimize2 } from "react-icons/lu";
import Button from '../ui/Button'

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    closeModal();
  };

  const country = ["Select", "Bangladesh",
  "Saudi Arabia",
  "United States",
  "Canada",
  "Germany",
  "Australia",
  "India",
  "United Kingdom",
  "Japan",
  "France",
  "Italy",
  "Brazil",
  "South Africa",
  "United Arab Emirates",
  "Singapore"]
  
  const [enabled, setEnabled] = useState(true)

  return (
    <>
      {/* Open Modal Button */}
      <Button
        onClick={openModal}
        variant="headless"
      >
        Contact Me
      </Button>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          {/* Overlay / Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <div className='flex justify-end'>
                  <Button variant="headless"
                    type="button"
                    onClick={closeModal}
                  >
                    <LuMinimize2 className='text-white' />
                  </Button>
                </div>
                <DialogTitle className="text-2xl font-semibold text-center">Contact Me</DialogTitle>

                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      className="w-full mt-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                  <label className="block text-sm font-medium">Select country</label>
          <Select
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black'
            )}
          >
            {country.map(item=> <option value="active">{item}</option>)}
          </Select>
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </div>
                  <div className='flex space-x-4'>
                    <Checkbox
                      checked={enabled}
                      onChange={setEnabled}
                      className="group size-6 rounded-md bg-white/10 p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-white"
                    >
                      <CheckIcon className="hidden size-4 fill-black group-data-[checked]:block" />
                    </Checkbox>
                    <p>Agree</p>
                  </div>

                  <div className="flex justify-between gap-4">
                    <Button variant="headless"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </DialogPanel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
