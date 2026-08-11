import RalKundeProficiency from '~/assets/pdfs/papers/2022_RAL_Kunde_Proficiency.pdf';
import PalmerStochastic from '~/assets/pdfs/papers/2026_Palmer_Hatton_Hollinger.pdf';
import type { Paper } from '~/components/publication';

const journalPapers: Paper[] = [
  {
    title:
      'Stochastic Physics-Informed Neural Networks on Lie Groups for Learning Underwater Vehicle Dynamics',
    authors: ['Evan Palmer', 'Ross L. Hatton', 'Geoffrey A. Hollinger'],
    venue: 'Under Review',
    year: '2026',
    doi: 'https://doi.org/10.48550/arXiv.2608.08356',
    pdf: PalmerStochastic,
  },
  {
    title:
      'Recognizing User Proficiency In Piloting Small Unmanned Aerial Vehicles (SUAV)',
    authors: ['Siya Kunde', 'Evan Palmer', 'Britany Duncan'],
    venue: 'IEEE Robotics and Automation Letters (RA-L)',
    year: '2022',
    doi: 'https://ieeexplore.ieee.org/document/9681275',
    pdf: RalKundeProficiency,
  },
];

export default journalPapers;
