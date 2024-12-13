const SuccessStories = () => {
    return (
        <section>
            <div className="flex justify-center">
                <div className="my-16 space-y-8">
                    <h2 className="text-[#242f3e] font-bold text-5xl text-center"> <span className='text-red-500'>Success</span> Stories </h2>
                    <div className="space-y-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, nemo.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-5">
                <iframe className="rounded-xl"
                width="560" height="315" src="https://www.youtube-nocookie.com/embed/20ll5O8SKrA?si=XUOI07LWq9a9jp_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                <iframe className="rounded-xl" width="560" height="315" src="https://www.youtube-nocookie.com/embed/rvNdnejqC6o?si=poGoDeCub03B8vr3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    );
};

export default SuccessStories;