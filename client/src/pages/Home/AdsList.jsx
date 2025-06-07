import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: 1,
        code: 'KMAP-001',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://nammafamilybuilder.com/wp-content/uploads/2022/02/Farm-land-for-sale.jpg',
        status: 'sold', // Added to indicate sold status
    },
    {
        id: 1,
        code: 'KMAP-002',
        price: '$59,99,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://midwestfarmco.com/wp-content/uploads/2022/01/Purchasing-farmland-Midwest.jpg',
        status: 'available', // Added to indicate sold status
    },
    {
        id: 1,
        code: 'KMAP-003',
        price: '$57,77,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://thumbs.dreamstime.com/b/young-eggplants-grow-field-vegetable-rows-agriculture-farming-farmlands-landscape-agricultural-land-120398754.jpg',
        status: 'available', // Added to indicate sold status
    },
    {
        id: 1,
        code: 'KMAP-004',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://img.freepik.com/premium-photo/generative-ai-farm-landscape-agricultural-fields-beautiful-countryside-country-road_93150-2591.jpg',
        status: 'sold', // Added to indicate sold status
    },
    {
        id: 1,
        code: 'KMAP-005',
        price: '$2,999,000',
        description: 'A software that develops products for software developers and developments.',
        coverImage: 'https://www.brutonknowles.co.uk/wp-content/uploads/2025/03/iStock-861958560.jpg',
        status: 'sold', // Added to indicate sold status
    },
];

function AdsList() {
    return (
        <div className='max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto'>
            <div className='text-center space-y-4 mb-12'>
                <h1 className='text-4xl font-light'>Available <span className='font-bold'>Properties</span> for sale</h1>
                <p className='text-slate-600 font-light max-w-4xl mx-auto'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis
                    explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.
                </p>
            </div>

            <div className="max-w-full">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col h-full bg-white border border-gray-200 shadow-2xs rounded-xl"
                        >
                            <div className="h-52 relative rounded-t-xl overflow-hidden">
                                <img
                                    src={project.coverImage}
                                    alt={`${project.code} cover`}
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-green-600 capitalize text-white text-xs font-semibold px-2 py-1 rounded">
                                    {project.status}
                                </span>
                            </div>
                            <div className="p-4 md:p-6">
                                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600">
                                    {project.code}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {project.price}
                                </h3>
                                <p className="mt-3 text-gray-500 text-sm">{project.description}</p>
                            </div>
                            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200">
                                <Link
                                    to={`/project-details/${project.id}`} // Changed to use project.id for consistency
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdsList;