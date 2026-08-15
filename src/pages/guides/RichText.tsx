import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { parseLinks, relFor } from './links';

/**
 * Guide copy is authored as plain strings so the content files stay readable
 * and diffable. This renders the one piece of markup that copy actually needs:
 * inline links, written as [label](href).
 *
 * Anything else is emitted verbatim, so an unmatched bracket in prose is safe.
 */
const LINK_CLASS = 'text-brand underline underline-offset-2 hover:text-brand-dark';

export function RichText({ text }: { text: string }) {
  return (
    <>
      {parseLinks(text).map((seg, i) => (
        <Fragment key={i}>
          {seg.kind === 'text' ? (
            seg.value
          ) : seg.internal ? (
            <Link to={seg.href} className={LINK_CLASS}>
              {seg.label}
            </Link>
          ) : (
            <a href={seg.href} target="_blank" rel={relFor(seg.href)} className={LINK_CLASS}>
              {seg.label}
            </a>
          )}
        </Fragment>
      ))}
    </>
  );
}
