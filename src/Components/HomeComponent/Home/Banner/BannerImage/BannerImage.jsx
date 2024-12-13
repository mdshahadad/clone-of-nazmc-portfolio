const BannerImage = () => {
    return (
        <div className="relative">
            <img className="xl:w-[570px] lg:w-[450px]" src={`https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png`} alt="" />
            <div className="flex gap-5 absolute -bottom-24 right-0">
                <div className="bg-white xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <div className="space-y-2">
                        <h3 className="xl:text-5xl lg:text-3xl font-bold text-[#E54444]">1+</h3>
                        <p>Years experience in <br /> Developing</p>
                    </div>
                </div>
                <div className="bg-[#E54444] xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 text-white flex xl:items-center lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <div className="space-y-2">
                        <h3 className="xl:text-5xl lg:text-3xl font-bold">2M+</h3>
                        <p>Views on Social Media <br /> & Youtube Channel</p>
                    </div>
                </div>
                <div className="bg-white xl:py-4 lg:py-3 px-4 xl:w-[200px] lg:w-[170px] space-y-2 flex  lg:items-start" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <div className="space-y-2">
                        <h3 className="xl:text-5xl lg:text-3xl font-bold text-[#E54444]">10+</h3>
                        <p>Project Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;