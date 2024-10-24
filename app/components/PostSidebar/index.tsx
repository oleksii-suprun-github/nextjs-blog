import TableOfContent from '../TableOfContent';

const PostSidebar = ({ tocData }: { tocData: any[] }) => (
  <aside className="md:w-1/5">
    <div className="hidden lg:block">
      <TableOfContent data={tocData} />
    </div>
  </aside>
);
export default PostSidebar;
