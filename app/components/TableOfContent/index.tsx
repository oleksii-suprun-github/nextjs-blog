import Link from 'next/link';
import speakingurl from 'speakingurl';

function TableOfContent({ data }: { data: any[] }) {
  const headings = data.map((heading) => {
    const text = heading.children[0].text;
    const anchor = speakingurl(text);

    return (
      <li className="mb-3 text-lg" key={heading._key}>
        <Link className="border-b" href={`#${anchor}`}>
          {text}
        </Link>
      </li>
    );
  });

  return (
    <div id="toc">
      <div className="sticky left-0 top-0 z-50 lg:hidden">
        <div className="collapse collapse-arrow rounded-none border-base-300 bg-brand-dark shadow-lg sm:px-6">
          <input type="checkbox" />
          <div className="collapse-title px-6 text-xl font-medium">Table of Content</div>
          <div className="collapse-content px-6">
            <ul className="pt-4">{headings}</ul>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <h3 className="mb-6 text-2xl font-semibold">Table of Content</h3>
        <ul>{headings}</ul>
      </div>
    </div>
  );
}

export default TableOfContent;
