import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    type: 'Atlassian API',
    name: 'Atlassian',
    description: 'A software that develops products for software developers and developments.',
    coverImage: 'https://via.placeholder.com/300x200?text=Atlassian+Project', // Replace with actual image URL
  },
];

function Features() {
  return (
    <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto'>
      <div className='text-center space-y-4 mb-12'>
        <h1 className='text-4xl font-light'> <span className='font-bold'>Features</span> that makes us different</h1>
        <p className='text-gray-500 text-sm font-light max-w-4xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
      </div>

      <div className='flex items-center justify-center w-full space-x-24'>

        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16  flex items-center justify-center'>
              <i class="fa-duotone fa-regular fa-briefcase text-3xl text-green-800 "></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Experienced</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>

        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16  flex items-center justify-center'>
              <i class="fa-duotone fa-regular fa-magnifying-glass text-3xl text-green-800 "></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Best Matches</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>

        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16  flex items-center justify-center'>
              <i class="fa-duotone fa-regular fa-sack-dollar text-3xl text-green-800 "></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Competitive Prices</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>

      </div>

      {/* <div className="max-w-full">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl"
            >
              <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <img
                  src={project.coverImage}
                  alt={`${project.name} cover`}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.name}
                </h3>
                <p className="mt-3 text-gray-500">{project.description}</p>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                <Link
                  to={`/project-details/${project.name}`}
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                >
                  View sample
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Features;