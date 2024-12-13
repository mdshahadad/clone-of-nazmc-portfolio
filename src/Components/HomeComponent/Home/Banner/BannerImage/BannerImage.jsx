const BannerImage = () => {
    return (
        <div className="relative">
            <img className="w-[570px]" src={`https://i.postimg.cc/xdDSkvJ5/Banner-Img-without-bg-2.png`} alt="" />
            <div className="flex gap-5 absolute -bottom-24">
                <div className="bg-white py-8 px-3 w-[200px] space-y-2" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <h3 className="text-5xl font-bold">1+</h3>
                    <p>Years experience in <br /> Developing</p>
                </div>
                <div className="bg-white py-8 px-3 w-[200px] space-y-2" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <h3 className="text-5xl font-bold">2M+</h3>
                    <p>Views on Social Media <br /> & Youtube Channel</p>
                </div>
                <div className="bg-white py-8 px-3 w-[200px] space-y-2" style={{ borderRadius: '10px 2px 10px 10px' }}>
                    <h3 className="text-5xl font-bold">10+</h3>
                    <p>Project Completed</p>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;