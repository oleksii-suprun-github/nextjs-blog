import Link from 'next/link';
import speakingurl from 'speakingurl';

const PostSidebar = ({ toc }: { toc: any[] }) => {
  const headings = toc.map((heading) => {
    const text = heading.children[0].text;
    const anchor = speakingurl(text);

    return (
      <li className="mb-3 text-lg underline" key={heading._key}>
        <Link href={`#${anchor}`}>{text}</Link>
      </li>
    );
  });

  return (
    <aside className="w-1/5">
      <div id="toc">
        <h3 className="mb-6 text-2xl font-semibold">Table of Content</h3>
        <ul>{headings}</ul>
      </div>
    </aside>
  );
};
export default PostSidebar;
