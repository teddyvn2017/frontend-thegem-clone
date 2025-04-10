import React from 'react'

const OurGuarantees = () => {
    return (
        <section className='w-full bg-white mt-16'>
            <div className='mx-auto px-8 lg:px-16 flex flex-wrap items-center justify-between gap-8'>
                {/* Item */}
                <div className='flex flex-row items-center justify-center gap-4'>
                    <i className='bx bx-globe text-3xl'></i>
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='font-semibold text-base text-[#222]'>Free Shipping and Return</h3>
                        <h4 className='text-sm text-gray-500'>Lorem ipsum dolor amet consectetur</h4>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <i className='bx bx-wallet text-3xl'></i>                    
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='font-semibold text-base text-[#222]'>Money Back Guarantee (30 days)</h3>
                        <h4 className='text-sm text-gray-500'>Lorem ipsum dolor amet consectetur</h4>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <i className='bx bx-headphone text-3xl'></i>
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='font-semibold text-base text-[#222]'>Online Support 24/7</h3>
                        <h4 className='text-sm text-gray-500'>Lorem ipsum dolor amet consectetur</h4>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <i className='bx bx-lock-alt text-3xl' ></i>
                    <div className='flex flex-col items-start justify-center'>
                        <h3 className='font-semibold text-base text-[#222]'>Safe Payment</h3>
                        <h4 className='text-sm text-gray-500'>Lorem ipsum dolor amet consectetur</h4>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default OurGuarantees