import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Card from './Card'

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: "Biolink-lite",
        description: "Lightweight bio link manager",
        img: "/public/fully-responsive.png",
        link: "/biolinklite.com",
      },
      {
        id: 2,
        title: "TaskFlow",
        description: "Simple task management tool",
        img: "/public/7501185.jpg",
        link: "/taskflow.com",
      },
      {
        id: 3,
        title: "DevBlog",
        description: "Minimal developer blog",
        img: "/public/7475606.jpg",
        link: "/devblog.com",
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 4,
        title: "ShopEase",
        description: "E-commerce made easy",
        img: "/public/7587686.jpg",
        link: "/shopease.com",
      },
      {
        id: 5,
        title: "PortfolioX",
        description: "Personal portfolio template",
        img: "/public/Responsive-Mockup-1024x804.jpg",
        link: "/portfoliox.com",
      },
      {
        id: 6,
        title: "CryptoTrack",
        description: "Track cryptocurrency prices",
        img: "/public/7501185.jpg",
        link: "/cryptotrack.com",
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 7,
        title: "FitBuddy",
        description: "Your fitness tracking app",
        img: "/public/Responsive-Mockup-1024x804.jpg",
        link: "/fitbuddy.com",
      },
      {
        id: 8,
        title: "EduMaster",
        description: "Online learning platform",
        img: "/public/7501185.jpg",
        link: "/edumaster.com",
      },
      {
        id: 9,
        title: "CodeSnip",
        description: "Save and share code snippets",
        img: "/public/7587686.jpg",
        link: "/codesnip.com",
      },
      {
        id: 10,
        title: "TravelMate",
        description: "Plan and book your trips",
        img: "/public/7475606.jpg",
        link: "/travelmate.com",
      },
    ],
  },
]

export default function Projects() {
  return (
    <div className="w-full py-10 px-4 bg-gray-900">
      <div className='flex flex-col items-center mb-10'>
        <h1 className='text-white font-bold text-4xl uppercase'>My awesome work</h1>
        <p className='text-pink-600 font-semibold mt-2'>Creative and innovative web development.</p>
      </div>
      <div className="w-full px-20">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl bg-white/5 p-3 ">
                <div className='grid grid-cols-3 gap-4'>
                {posts.map((post)=><Card title={post.title} description={post.description} image={post.img} link={post.link} />)}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}
