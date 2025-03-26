import { Switch } from '@headlessui/react';
import { useState } from 'react';

export default function Projects() {
  const [enabled, setEnabled] = useState(false);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold">My Projects</h2>

        <div className="mt-8 flex justify-center">
          <Switch.Group as="div" className="flex items-center space-x-4">
            <Switch.Label className="text-lg">Show Only Featured</Switch.Label>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${enabled ? 'bg-blue-600' : 'bg-gray-200'} relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span className="sr-only">Show Featured Projects</span>
              <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full`}
              />
            </Switch>
          </Switch.Group>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {enabled ? (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Featured Project</h3>
              <p className="mt-2">A description of the featured project goes here.</p>
            </div>
          ) : (
            <>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 1</h3>
                <p className="mt-2">Description of project 1</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 2</h3>
                <p className="mt-2">Description of project 2</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">Project 3</h3>
                <p className="mt-2">Description of project 3</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
