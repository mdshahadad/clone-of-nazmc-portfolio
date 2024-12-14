const NewspaperShow = () => {
    return (
        <section className="lg:py-28 pb-14">
            <div className="bg-[#f2f2f2] py-16 space-y-4">
                <div className="flex justify-center">
                    <h5 className="text-lg font-semibold">As seen on</h5>
                </div>
                <div className="lg:flex justify-center px-4">
                    <div className="lg:flex items-center justify-center lg:space-y-0 space-y-4">
                        <img className="h-3/4 xl:scale-100 lg:scale-90" src="https://nazmc.com/wp-content/uploads/2023/12/newspapers2-650x46.png" alt="" />
                        <img className="h-3/4 xl:scale-100 lg:scale-90" src="https://nazmc.com/wp-content/uploads/2023/12/newspapers1-650x40.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewspaperShow;