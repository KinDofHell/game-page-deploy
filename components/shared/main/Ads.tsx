import React from 'react'

const Ads = () => {
    return (
        <div className="hidden xl:block relative ml-[60px] rounded-[20px] bg-gradient-red">
            <img
                src="/images/ads.png"
                alt="promoted"
                className="min-w-[300px] h-[600px]"
            />
            <div className="text-white absolute left-0 top-0 rounded-[20px] min-w-[300px] h-[600px] flex flex-col justify-center items-center">
                <span className="text-[60px] font-bold">ADS</span>
                <span className="text-[40px] font-bold">300x600</span>
            </div>
        </div>
    )
}
export default Ads
