const WhyChoose = () => {
    return (
        <section className="bg-[#242f3e] my-16">
            <div className="flex justify-center py-20">
                <div className="space-y-5 text-white">
                    <h2 className="lg:text-5xl text-2xl text-white font-bold text-center">Why Choose <span className="text-red-500">Shahadad</span></h2>
                    <h2 className="lg:text-5xl text-2xl text-white font-bold text-center lg:leading-[55px]">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ab, nobis.</h2>
                    <p className="text-center lg:w-1/2 lg:mx-auto mx-4 text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quasi voluptatum animi quia recusandae exercitationem dolorum facilis provident quas! Nostrum magnam atque facilis repudiandae repellendus molestiae odit provident odio a quidem doloremque deleniti magni autem, officiis, porro corrupti harum esse?</p>
                </div>
            </div>
            <section className="lg:flex justify-center gap-8 pb-20 mx-4">
                <div className="flex gap-5">
                    <div>
                        <img className="w-[340px]" src="https://nazmc.com/wp-content/uploads/2024/11/fb-40K.webp" alt="" />
                    </div>
                    <div>
                        <img className="w-[340px]" src="https://nazmc.com/wp-content/uploads/2024/11/yt-followers.webp" alt="" />
                    </div>
                </div>
                <div className="flex gap-5">
                    <div>
                        <img className="w-[340px]" src="https://nazmc.com/wp-content/uploads/2024/11/fb-40K.webp" alt="" />
                    </div>
                    <div>
                        <img className="w-[340px]" src="https://nazmc.com/wp-content/uploads/2024/11/yt-followers.webp" alt="" />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default WhyChoose;