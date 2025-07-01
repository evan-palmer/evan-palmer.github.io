import IcraPalmerUvms from '../assets/pdfs/papers/2024_ICRA_Palmer_UVMS.pdf';
import OceansKolanoCoupling from '../assets/pdfs/papers/2024_OCEANS_Kolano_Coupling.pdf';
import OceansAgrawalUnderwater from '../assets/pdfs/papers/2025_OCEANS_Agrawal.pdf';

const ConferencePapers = [
  {
    title: 'Underwater Multi-Robot Simulation and Motion Planning in Angler',
    authors: ['Akshaya Agrawal', 'Evan Palmer', 'Zachary Kingston', 'Geoffrey Hollinger'],
    venue: 'OCEANS',
    year: '2025',
    pdf: OceansAgrawalUnderwater,
  },
  {
    title: 'The Coupling Effect: Experimental Validation of the Fusion of Fossen and Featherstone to Simulate UVMS Dynamics in Julia',
    authors: ['Hannah Kolano', 'Evan Palmer', 'Joseph R. Davidson'],
    venue: 'OCEANS',
    year: '2024',
    pdf: OceansKolanoCoupling,
    doi: 'https://ieeexplore.ieee.org/document/10754137',
  },
  {
    title: 'Angler: An Autonomy Framework for Intervention Tasks with Lightweight Underwater Vehicle Manipulator Systems',
    authors: ['Evan Palmer', 'Christopher Holm', 'Geoffrey Hollinger'],
    venue: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: '2024',
    pdf: IcraPalmerUvms,
    doi: 'https://ieeexplore.ieee.org/document/10610184',
  },
];

export default ConferencePapers;
