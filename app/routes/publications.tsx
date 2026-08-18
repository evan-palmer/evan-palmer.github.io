import Page from '~/components/page';
import Publication, { type Paper } from '~/components/publication';
import conferencePapers from '~/data/publications/conference';
import journalPapers from '~/data/publications/journal';
import preprintPapers from '~/data/publications/preprint';
import workshopPapers from '~/data/publications/workshop';

function Section({ title, papers }: { title: string; papers: Paper[] }) {
  if (papers.length === 0) return null;

  return (
    <div>
      <p className="mb-4 border-b border-greyscale-300 pb-2 text-lg font-semibold text-greyscale-900">
        {title}
      </p>
      <div className="flex flex-col gap-5">
        {papers.map((paper) => (
          <Publication key={paper.title} paper={paper} />
        ))}
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <Page title="Publications">
      <div className="flex flex-col gap-10">
        <Section title="Preprints" papers={preprintPapers} />
        <Section title="Journal Articles" papers={journalPapers} />
        <Section title="Conference Papers" papers={conferencePapers} />
        <Section title="Workshop Papers" papers={workshopPapers} />
      </div>
    </Page>
  );
}
