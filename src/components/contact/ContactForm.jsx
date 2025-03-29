import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
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
              <Dialog.Panel className="w-full max-w-md bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <div className='flex justify-end'>
                <Button variant="headless"
                      type="button"
                      onClick={closeModal}
                    >
                      <LuMinimize2 className='text-white'  />
                    </Button>
                </div>
                <Dialog.Title className="text-2xl font-semibold text-center">Contact Me</Dialog.Title>

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

                  {/* Buttons */}
                  <div className="flex justify-between gap-4">
                    <Button variant="headless"
                      type="submit"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
