import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { CardMedia, Card, Box, Link } from "@mui/material";
import "./dynex.css";

export default function Dynex() {
  return (
    <section className="dynex">
      <Stack
        spacing={{ xs: 5, sm: 10 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          background: "white !important",
          height: "100%",
          padding: "10px",
          paddingBottom: "50px",
        }}
      >
        <Stack direction="row" spacing="10px" sx={{ alignSelf: "flex-start" }}>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "30px" }}
            alt="teaser"
            src={require("./franky.png")}
          />
          <Button disableRipple href="/">
            <Typography className="link">back</Typography>
          </Button>
          <Button
            disableRipple
            href="https://arxiv.org/abs/2403.18111"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">arxiv</Typography>
          </Button>
          <Button
            disableRipple
            href="https://github.com/jennygzma/ui-design-prototype"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">github </Typography>
          </Button>
        </Stack>
        <Stack
          spacing="30px"
          sx={{
            width: "70%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Typography variant="h4" textAlign="center">
            DynEx: Dynamic Code Synthesis with Structured Design Exploration for
            Accelerated Exploratory Programming
          </Typography>
          <Typography variant="h6">
            Jenny Ma, Karthik Sreedhar, Vivian Liu, Sitong Wang, Pedro Alejandro
            Perez, Riya Sahni, Lydia B. Chilton
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./teaser.png")}
          />
          <Typography variant="h5"> Abstract </Typography>
          <Typography variant="body1">
            Recent advancements in large language models have significantly
            expedited the process of generating front-end code. This allows
            users to rapidly prototype user interfaces and ideate through code,
            a process known as exploratory programming. However, existing LLM
            code-generation tools focus more on technical implementation details
            rather than finding the right design given a particular problem. We
            present DynEx, an LLM-based method for design exploration in
            accelerated exploratory programming. DynEx uses LLMs to guide users
            through a structured Design Matrix to explore the design space
            before dynamic iterative implementation. It also introduces a
            technique to self-invoke generative AI, enabling the creation of a
            diverse suite of applications. A user study of 10 experts found that
            DynEx increased design exploration and enabled the creation of more
            complex and varied prototypes compared to a Claude Artifact
            baseline. We conclude with a discussion of the implications of
            design exploration for exploratory programming.
          </Typography>
          <Typography variant="h5"> Motivation </Typography>
          <Typography variant="body1">
            Recently released large language models (LLMs) have shown re-
            markable capabilities in generating code, particularly front-end
            code. This allows users to get ideas off the ground faster by
            building code-based user-interface (UI) prototypes and testing them
            directly in real world contexts, a process known as exploratory pro-
            gramming. Exploratory programming is crucial for experimental
            projects where real design testing is more productive than upfront
            specifications. Many interactions are difficult to simulate in low-
            fidelity prototyping mediums, particularly when testing data-driven
            applications; prototyping is crucial in these cases to truly test
            ideas. LLM code-generation abilities present a unique opportunity to
            accelerate exploratory programming and ideate through code. When
            prototyping, however, translating abstract concepts into concrete
            implementations is a challenging process. There is a gap in going
            from an idea to a working solution because initial ideas often lack
            clear boundaries, structured organization, and concrete details.
            Converting an initial idea into a feasible design requires a
            detailed consideration of multiple aspects: users must fully
            consider the problem being solved, the target user of the
            application, the approach or methodology, and the interaction
            paradigm or user experience. Each of these elements must be defined
            before mov- ing forward with implementation, making the transition
            from idea to design a complex and multifaceted process.
          </Typography>
          <Typography variant="h5"> System Overview </Typography>
          <Typography variant="body1">
            We present DynEx, an LLM-based method for exploratory pro- gramming
            for functional UIs. DynEx helps the user build code- based UI
            prototypes in two stages: (1) structured design exploration through
            a Design Matrix, and (2) dynamic iterative implementa- tion with LLM
            code synthesis. The Design Matrix brainstorms unique ideas through
            through idea generation to help users ex- plore the design space.
            The idea is then grounded, a process to synthesize abstract ideas
            into detailed application designs. The sys- tem next breaks down the
            project into steps to execute iteratively, and generates code that
            self-invokes multi-modal LLMs to produce applications that have
            larger sets of synthetic placeholder data, can generate images, and
            provide recommendations, enabling the creation of a diverse suite of
            applications.
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system_matrix.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system_implementation.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system_implementation_diagram.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system_step_outputs.png")}
          />
          <Typography variant="h5"> User Evaluation </Typography>
          <Typography variant="body1">
            We compared DynEx against Claude Artifact, an industry standard
            tool, as the baseline, Participants (n=10) were asked to name a
            problem that they would like to explore a solution for. The task was
            to explore concepts and prototypes that would help solve their
            problem. Our evaluation showed that participants found it much
            easier to explore different design ideas and better develop their
            initial ideas when using DynEx as compared to a baseline Claude
            Artifact. Our evaluation demonstrated that participants were able to
            create more feature-rich and complex solutions using DynEx. Overall,
            we found that DynEx was more successful for exploratory programming
            compared to Clauade Artifact.{" "}
          </Typography>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <img
              className="mx-auto rounded w-2/3 object-scale-down"
              style={{ width: "100%" }}
              alt="beat alignment"
              src={require("./results_participant_outputs.png")}
            />
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <Stack direction="row">
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                style={{ width: "50%" }}
                alt="evaluation"
                src={require("./Average_Scores.png")}
              />
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                style={{ width: "50%" }}
                alt="evaluation"
                src={require("./NASA-TLX-Results.png")}
              />
            </Stack>
          </Box>
          <Typography variant="h5"> Citation </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white !important",
              padding: "20px",
            }}
          >
            <code>
              @misc{"{"}nguyen2024scrolly2reel,
              <br />
              &nbsp;&nbsp;title={"{"}Scrolly2Reel: Retargeting Graphics for
              Social Media Using Narrative Beats{"}"}, <br />
              &nbsp;&nbsp;author={"{"}Duy K. Nguyen and Jenny Ma and Pedro
              Alejandro Perez and Lydia B. Chilton{"}"},<br />
              &nbsp;&nbsp;year={"{"}2024{"}"},<br />
              &nbsp;&nbsp;eprint={"{"}2403.18111{"}"},<br />
              &nbsp;&nbsp;archivePrefix={"{"}arXiv{"}"},<br />
              &nbsp;&nbsp;primaryClass={"{"}cs.HC{"}"}
              <br />
              {"}"}
            </code>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
