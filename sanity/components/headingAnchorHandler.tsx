import { PortableTextBlockComponent, PortableTextComponentProps } from 'next-sanity';
import speakingurl from 'speakingurl';

const headingAnchorHandler: PortableTextBlockComponent = ({
  children,
  value,
}: PortableTextComponentProps<any>) => {
  const text = value.children?.map((child: any) => child.text).join('') || '';
  const id = speakingurl(text);

  return <h2 id={id}>{children}</h2>;
};
export default headingAnchorHandler;
