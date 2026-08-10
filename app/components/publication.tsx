export type Paper = {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  doi?: string;
  pdf?: string;
  underReview?: boolean;
  toAppear?: boolean;
};

function Authors({ authors }: { authors: string[] }) {
  return (
    <>
      {authors.map((author, index) => (
        <span key={author}>
          {index > 0 && ', '}
          <span className={author === 'Evan Palmer' ? 'font-medium text-greyscale-900' : undefined}>
            {author}
          </span>
        </span>
      ))}
    </>
  );
}

export default function Publication({ paper }: { paper: Paper }) {
  return (
    <div>
      <p className="text-sm leading-snug font-medium text-greyscale-900">
        {paper.title}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-greyscale-600">
        <Authors authors={paper.authors} />
        {' — '}
        <i>{paper.venue}</i>
        {', '}
        {paper.year}
        {paper.underReview && ', under review'}
        {paper.toAppear && ', to appear'}
        {paper.doi && (
          <>
            {' · '}
            <a href={paper.doi} target="_blank" rel="noreferrer" className="text-primary-700 hover:underline">
              DOI
            </a>
          </>
        )}
        {paper.pdf && (
          <>
            {' · '}
            <a href={paper.pdf} target="_blank" rel="noreferrer" className="text-primary-700 hover:underline">
              PDF
            </a>
          </>
        )}
      </p>
    </div>
  );
}
