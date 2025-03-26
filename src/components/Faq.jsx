import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from "react-icons/fa";

const faqData = [
    { "ques": "Who is Abdur Rahman Zubayer?", "ans": "Abdur Rahman Zubayer is a junior web developer and the owner of the web development company Siege-Code." },
    { "ques": "What technologies does Zubayer specialize in?", "ans": "Zubayer has experience with Webpack and other web development tools and technologies." },
    { "ques": "What is Siege-Code?", "ans": "Siege-Code is Zubayer’s web development company that focuses on building modern, scalable, and efficient web solutions." },
    { "ques": "How experienced is Zubayer in web development?", "ans": "As a junior web developer, Zubayer is continuously learning and improving his skills while working on real-world projects." },
    { "ques": "Where can I contact Zubayer for web development services?", "ans": "You can reach out to Zubayer through Siege-Code’s official website or contact channels." }
  ]
  

export default function Faq() {
  return (
    <div className="h-screen w-full pt-32 px-4 px-6 md:px-20 bg-gray-800">
      <div className="mx-auto w-full divide-y divide-white/5 rounded-xl bg-white/5">
        {faqData.map( item=>
            <Disclosure as="div" className="p-6">
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 font-medium text-white group-data-[hover]:text-white/80">
                {item.ques}
              </span>
              <FaChevronDown className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 text-sm/5 text-white/50">
              {item.ans}
            </DisclosurePanel>
          </Disclosure>
        )}
      </div>
    </div>
  )
}
