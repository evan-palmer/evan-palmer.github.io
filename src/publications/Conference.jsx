import IcraPalmerUvms from '../assets/pdfs/papers/2024_ICRA_Palmer_UVMS.pdf';
import OceansKolanoCoupling from '../assets/pdfs/papers/2024_OCEANS_Kolano_Coupling.pdf';

const ConferencePapers = [
  {
    title:
      'The Coupling Effect: Experimental Validation of the Fusion of Fossen and Featherstone to Simulate UVMS Dynamics in Julia',
    authors: ['Hannah Kolano', 'Evan Palmer', 'Joseph R. Davidson'],
    venue: 'OCEANS',
    year: '2024',
    pdf: OceansKolanoCoupling,
    underReview: true,
  },
  {
    title:
      'Angler: An Autonomy Framework for Intervention Tasks with Lightweight Underwater Vehicle Manipulator Systems',
    authors: ['Evan Palmer', 'Christopher Holm', 'Geoffrey Hollinger'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: '2024',
    pdf: IcraPalmerUvms,
  },
];

export default ConferencePapers;
