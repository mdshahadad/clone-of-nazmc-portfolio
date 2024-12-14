const WelcomeNote = () => {
    return (
        <section className="lg:flex justify-center gap-4 lg:max-w-5xl lg:mx-auto mx-4 lg:py-24 py-4 lg:px-3 lg:space-y-0 space-y-4">
            <div className="lg:w-1/2">
                <img className="rounded-lg" src="https://nazmc.com/wp-content/uploads/2024/06/office.webp" alt="" />
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-12 lg:w-1/2 rounded-lg">
                <div>
                    <h2 className="font-bold text-4xl my-8 text-[#242f3e]">Welcome To Shahadad</h2>
                    <p className="leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod deserunt architecto at doloremque inventore corporis dolorum? Consequatur fugit eveniet quo excepturi nesciunt provident cumque. Fuga exercitationem ullam sint amet!</p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeNote;