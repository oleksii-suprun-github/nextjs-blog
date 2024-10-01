import Image from 'next/image';

function PublicationCard() {
  return (
    <div className="card image-full w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          width={400}
          height={200}
          src="/publications-previews/image.webp"
          alt="Sample featured image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white">Shoes!</h2>
        <p className="text-white">If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm bg-brand-dark-purple hover:bg-brand-purple">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
