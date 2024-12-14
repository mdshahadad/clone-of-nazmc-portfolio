import '../ConsultingBanner/Consulting.css';

const ConsultingImage = () => {
    return (
        <section className='py-20 px-28'>
            <section className="consulting-bg h-[900px]">
                <div className='flex justify-center'>
                    <div className='w-[700px] bg-white shadow-lg px-14 py-16 border-t-[5px] border-t-red-500 rounded-md space-y-4'>
                        <h2 className='text-4xl font-bold text-[#202839]'>That's Where I Come In. A Part-Time CMO</h2>
                        <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, magnam!</p>
                        <h4 className='text-2xl font-semibold'><span className='text-[#ed2849]'>Consulting </span>Is More Than Giving Advice</h4>
                        <article className="space-y-8 pt-5">
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi reprehenderit in odio veniam ad at molestias, dolorem sint esse?</p>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis tenetur numquam dolorem sunt consequuntur excepturi hic ullam iste provident, quod explicabo delectus tempora aut! Error sapiente repudiandae, natus quibusdam cupiditate, ea tenetur earum officiis beatae nulla alias, odit enim.</p>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur <strong>adipisicing elit. Voluptas</strong> voluptatem nesciunt ad repellendus sunt repellat distinctio nemo voluptatum corrupti, neque consequatur. Expedita odit, recusandae voluptas tempora ipsa illo nesciunt autem totam officia eum cumque debitis explicabo velit voluptatibus similique ea.</p>
                        </article>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default ConsultingImage;