import React from "react";
import { Box, Text, List } from "@chakra-ui/react";
import Publication from "../components/Publication";
import Page from "../components/Page";

// Papers
import RalKundeProficiency from "../assets/pdfs/papers/2022_RAL_Kunde_Proficiency.pdf";

function Section({ title, papers }) {
  return (
    <Box>
      <Text
        fontSize={{ base: "1.8rem", lg: "2rem" }}
        fontWeight="500"
        marginTop="4vh"
      >
        {title}
      </Text>
      <List spacing={4}>
        {papers.map((paper, index) => (
          <Publication key={index} paper={paper} />
        ))}
      </List>
    </Box>
  );
}

function Publications() {
  const JournalPapers = [
    {
      title:
        "Recognizing User Proficiency In Piloting Small Unmanned Aerial Vehicles (SUAV)",
      authors: ["Siya Kunde", "Evan Palmer", "Britany Duncan"],
      venue: "IEEE Robotics and Automation Letters (RA-L)",
      year: "2022",
      doi: "https://ieeexplore.ieee.org/document/9681275",
      pdf: RalKundeProficiency,
    },
  ];

  const ConferencePapers = [
    {
      title:
        "Angler: An Autonomy Framework for Intervention Tasks with Lightweight Underwater Vehicle Manipulator Systems",
      authors: ["Evan Palmer", "Christopher Holm", "Geoffrey Hollinger"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2024",
      underReview: true,
    },
    {
      title:
        "The Coupling Effect: Experimental Validation of the Fusion of Fossen and Featherstone to Simulate UVMS Dynamics in Julia",
      authors: ["Hannah Kolano", "Evan Palmer", "Joseph Davidson"],
      venue: "IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2024",
      underReview: true,
    },
  ];

  return (
    <Page title="✍🏻 Check out my publications">
      <Section title="Journal Articles" papers={JournalPapers} />
      <Section title="Conference Papers" papers={ConferencePapers} />
    </Page>
  );
}

export default Publications;