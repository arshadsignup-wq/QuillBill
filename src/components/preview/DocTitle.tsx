import { createContext, useContext, type ReactNode, type CSSProperties } from 'react';

/**
 * The document's own title — "INVOICE", "QUOTATION", "PROPOSAL".
 *
 * On the editor and the shared-document view this is genuinely the page's
 * heading, so it renders as <DocTitle>. Inside a gallery thumbnail it is not: fifteen
 * previews on one page meant fifteen competing <DocTitle> elements, which the SEO
 * audit rightly failed. Wrapping a preview in <PreviewHeadings> drops the same
 * markup to a <div> with no visual change.
 */
const TitleTagCtx = createContext<'h1' | 'div'>('h1');

export function PreviewHeadings({ children }: { children: ReactNode }) {
  return <TitleTagCtx.Provider value="div">{children}</TitleTagCtx.Provider>;
}

interface DocTitleProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export function DocTitle({ className, style, children }: DocTitleProps) {
  const Tag = useContext(TitleTagCtx);
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
