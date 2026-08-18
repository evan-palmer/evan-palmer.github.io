import PalmerStochastic from '~/assets/pdfs/papers/2026_Palmer_Hatton_Hollinger.pdf';
import type { Paper } from '~/components/publication';

const preprintPapers: Paper[] = [
  {
    title:
      'Stochastic Physics-Informed Neural Networks on Lie Groups for Learning Underwater Vehicle Dynamics',
    authors: ['Evan Palmer', 'Ross L. Hatton', 'Geoffrey A. Hollinger'],
    venue: 'Under Review',
    year: '2026',
    doi: 'https://doi.org/10.48550/arXiv.2608.08356',
    pdf: PalmerStochastic,
  },
];

export default preprintPapers;
