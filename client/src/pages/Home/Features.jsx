import React from 'react';

function Features() {
  return (
    <div className='max-w-7xl px-4 sm:px-4 mx-auto'>
      <div className='text-center space-y-4 mb-12'>
        <h1 className='text-4xl font-light'> <span className='font-bold'>Features</span> that makes us different</h1>
        <p className='text-gray-500 text-sm font-light max-w-4xl mx-auto sm:text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
      </div>

      <div className='flex flex-col sm:flex-row items-center justify-center w-full space-y-8 sm:space-y-6'>
        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16 flex items-center justify-center'>
              <i className="fa-duotone fa-regular fa-briefcase text-3xl text-green-800"></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Experienced</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center sm:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>

        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16 flex items-center justify-center'>
              <i className="fa-duotone fa-regular fa-magnifying-glass text-3xl text-green-800"></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Best Matches</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center sm:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>

        <div className='space-y-4 flex flex-col items-center justify-center'>
          <div className='bg-green-200 rounded-full w-20 h-20 flex items-center justify-center'>
            <div className='bg-green-400 rounded-full w-16 h-16 flex items-center justify-center'>
              <i className="fa-duotone fa-regular fa-sack-dollar text-3xl text-green-800"></i>
            </div>
          </div>
          <h1 className='text-2xl font-semibold'>Competitive Prices</h1>
          <p className='text-slate-600 font-light max-w-5xl text-center sm:text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat nisi non nostrum rerum earum officiis explicabo ad debitis! Quaerat optio sunt ipsam tenetur sapiente nesciunt nihil, quia impedit architecto cum.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;