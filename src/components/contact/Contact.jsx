import { Mail, Phone, MapPin, } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <div className="w-full mx-auto bg-gray-900 py-10">
      <div className='flex flex-col items-center mb-10'>
        <h1 className='text-white font-bold text-4xl uppercase'> Contact with me</h1>
        <p className='text-pink-600 font-semibold mt-2'>Common queries and helpful answers.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-pink-500" />
            <span className="text-gray-200">arzubayer03@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-pink-500" />
            <span className="text-gray-200">+8801516065110</span>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-pink-500" />
            <span className="text-gray-200">Amtoli, Tongibari, Munshigonj</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ContactForm />
          
        </div>
      </div>
    </div>
  );
}