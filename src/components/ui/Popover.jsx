import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

export default function MyPopover() {
  const suggestion = [
    { title: "Who I Am", description: "A passionate web developer with a love for clean code" },
    { title: "My Journey", description: "From curious beginner to building real-world projects" },
    { title: "Skills & Tools", description: "React, Tailwind, Node.js, and modern web technologies" },
    { title: "What Drives Me", description: "Solving problems and creating smooth user experiences" }
  ]
  return (
    <div className="flex justify-center">
      <div className="flex gap-8">
        <Popover>
          <PopoverButton className="text-white border-b-2 border-gray-800 hover:border-pink-500">
          Suggestion
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="mt-6 divide-y divide-white/5 rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
          >
            <div className="p-3">
              {suggestion.map(item=> 
                <a className="block rounded-lg py-2 px-3 transition hover:bg-white/5" href="#">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-white/50">{item.description}</p>
              </a>
              )}
            </div>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  )
}
