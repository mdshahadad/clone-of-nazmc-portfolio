const WelcomeNote = () => {
    return (
        <section className="flex justify-center gap-4 max-w-5xl mx-auto pt-24">
            <div className="w-1/2">
                <img className="rounded-lg" src="https://nazmc.com/wp-content/uploads/2024/06/office.webp" alt="" />
            </div>
            <div className="bg-gray-100 flex justify-center items-center p-12 w-1/2 rounded-lg">
                <div>
                    <h2 className="font-bold text-4xl my-8">Welcome To Shahadad</h2>
                    <p className="leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod deserunt architecto at doloremque inventore corporis dolorum? Consequatur fugit eveniet quo excepturi nesciunt provident cumque. Fuga exercitationem ullam sint amet!</p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeNote;