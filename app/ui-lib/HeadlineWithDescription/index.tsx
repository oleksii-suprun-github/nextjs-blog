function HeadlineWithDescription({
  headline,
  description,
}: {
  headline: string;
  description: string;
}) {
  return (
    <div className="mb-12">
      <h1 className="mb-4 text-3xl font-bold text-gray-200">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}

export default HeadlineWithDescription;
