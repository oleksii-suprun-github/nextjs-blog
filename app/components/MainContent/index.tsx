import Image from 'next/image';

const MainContent = () => (
  <main className="bg-brand-dark-purple px-4 py-8">
    <section className="container mx-auto">
      <section className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Latest Publications</h1>
        <p>Discover our newest articles and research papers.</p>

        <div className="card image-full w-96 bg-base-100 shadow-xl">
          <figure>
            <Image width={400} height={200} src="/publications-previews/image.webp" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">Shoes!</h2>
            <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Upcoming Events</h1>
        <p>Join us for webinars, workshops, and more.</p>
      </section>
      <section className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Past Event Recordings</h1>
        <p>Watch recordings of our previous events.</p>
      </section>
    </section>
  </main>
);

export default MainContent;
