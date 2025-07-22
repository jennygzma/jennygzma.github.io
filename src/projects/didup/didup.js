import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import franky from "../../components/assets/franky.png";
import "./didup.css";

export default function Didup() {
  return (
    <section className="didup">
      <Stack
        spacing={{ xs: 5, sm: 10 }}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          background: "lightblue !important",
          height: "100%",
          padding: "10px",
          paddingBottom: "50px",
        }}
      >
        <Stack direction="row" spacing="10px" sx={{ alignSelf: "flex-start" }}>
          <Button disableRipple href="/">
            <Typography className="link">back</Typography>
          </Button>
          <Button disableRipple href="/#/didup/poster">
            <Typography className="link">poster</Typography>
          </Button>
          <Button
            disableRipple
            href="https://arxiv.org/abs/2407.08474"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">arxiv</Typography>
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
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "10%" }}
            alt="teaser"
            src={franky}
          />
          <Typography variant="h3" textAlign="center">
            DIDUP: Dynamic Iterative Development for UI Prototyping
          </Typography>
          <Typography variant="h6">
            Jenny Ma*, Karthik Sreedhar*, Vivian Liu, Sitong Wang, Pedro
            Alejandro Perez, Lydia Chilton
          </Typography>

          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./teaser.png")}
          />
          <Typography variant="h4"> Abstract </Typography>
          <Typography variant="body1">
            Large language models (LLMs) are remarkably good at writing code. A
            particularly valuable case of human-LLM collaboration is code-based
            UI prototyping, a method for creating interactive prototypes that
            allows users to view and fully engage with a user interface. We
            conduct a formative study of GPT Pilot, a leading LLM-generated
            code-prototyping system, and find that its inflexibility towards
            change once development has started leads to weaknesses in failure
            prevention and dynamic planning; it closely resembles the linear
            workflow of the waterfall model. We introduce DIDUP, a system for
            code-based UI prototyping that follows an iterative spiral model,
            which takes changes and iterations that come up during the
            development process into account. We propose three novel mechanisms
            for LLM-generated code-prototyping systems: (1) adaptive planning,
            where plans should be dynamic and reflect changes during
            implementation, (2) code injection, where the system should write a
            minimal amount of code and inject it instead of rewriting code so
            users have a better mental model of the code evolution, and (3)
            lightweight state management, a simplified version of source control
            so users can quickly revert to different working states. Together,
            this enables users to rapidly develop and iterate on prototypes.
          </Typography>
          <Typography variant="h4"> Motivation </Typography>
          <Typography variant="body1">
            Large language models are remarkably good at writing code as
            evidenced by numerous tools including Gemini, CoPilot, Devin, and
            GPT Pilot. Programming is a complex task that requires both
            high-level planning about system design and low-level understanding
            of how features can be rendered and implemented. A particularly
            valuable case of human-LLM collaboration is code-based UI
            prototyping. It is a method to build interactive prototypes that
            enable users to see and fully interact with a user interface. For
            example, a user may want to compare how card-swiping interactions
            differ from a news-feed layout when selecting restaurants to eat at.
            Code-based UI prototypes are valuable for testing data-driven
            applications that require an interactive component, and often serve
            as a basis for subsequent versions of the product. In some cases it
            can even serve as a minimum viable product. Code-based UI
            prototyping is not a task that can be fully automated. It is an
            iterative and exploratory process where users adapt their designs as
            they incrementally build and test their designs. In such a process,
            automatic code generation can be highly valuable to alleviate
            tedious aspects of the development process, but the user must remain
            in control in order to guide the system.
          </Typography>
          <Typography variant="body1">
            In software development, there are two main paradigms of writing
            code: (1) the classic waterfall model, and (2) the iterative spiral
            model. The waterfall model is a linear workflow where each phase of
            development must be completed before the next phase begins, and
            stages are traversed sequentially. It is simple to realize in
            practice, but is limited because of its inflexibility towards change
            once development has started and inability to return to previous
            states of development. It is therefore not suited for applications
            with evolving requirements and require cyclical testing such as
            code-based UI prototyping. The spiral model is a paradigm that
            provides an iterative approach to software development. It is
            represented as a spiral with many loops, where each loop of the
            spiral explores a small feature or idea and consists of planning,
            engineering, and evaluation. Unlike the waterfall mode, the spiral
            model supports shifts in project design as developers determine what
            works and what doesn’t work. Prototyping is fundamentally an
            iterative process, and thus any tool for prototyping should adopt a
            spiral development process.
          </Typography>
          <Typography variant="h4"> DIDUP System Overview </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system.png")}
          />
          <Typography variant="body1">
            We propose three novel mechanisms that can guide the architecture
            for code-based UI prototyping systems that follow an iterative
            spiral model:
          </Typography>
          <Typography variant="body1">
            (1) Adaptive Planning: systems must support continual updates in
            designs and plans based on feedback and implementation. This allows
            for flexibility in development and for users to elaborate on initial
            project plans.{" "}
          </Typography>
          <Typography variant="body1">
            (2) Code Injection: when approaching projects with multiple tasks,
            prior working code can be rewritten during implementation, which is
            confusing for users because they don’t know what was removed or
            added. By injecting the minimal amount of code necessary to a target
            location, code injection allows for safe code modifications,
            providing users with a clear mental model of the code’s evolution.
          </Typography>
          <Typography variant="body1">
            (3) Lightweight State Management: errors inevitably occur, and in
            situations where the machine cannot fix them, it provides a
            simplified version of source control. This allows users to quickly
            revert to different working states and supports rapid prototype
            explorations.
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./output.png")}
          />
          <Typography variant="h4"> Citation </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "white !important",
              padding: "20px",
            }}
          >
            <code>
              @misc{"{"}ma2024didupdynamiciterativedevelopment,
              <br />
              &nbsp;&nbsp;title={"{"}DIDUP: Dynamic Iterative Development for UI
              Prototyping{"}"}, <br />
              &nbsp;&nbsp;author={"{"}Jenny Ma and Karthik Sreedhar and Vivian
              Liu and Sitong Wang and Pedro Alejandro Perez and Lydia B. Chilton
              {"}"},<br />
              &nbsp;&nbsp;year={"{"}2024{"}"},<br />
              &nbsp;&nbsp;eprint={"{"}2407.08474{"}"},<br />
              &nbsp;&nbsp;archivePrefix={"{"}arXiv{"}"},<br />
              &nbsp;&nbsp;primaryClass={"{"}cs.HC{"}"}, <br />
              &nbsp;&nbsp;url={"{"}https://arxiv.org/abs/2407.08474{"}"}
              <br />
              {"}"}
            </code>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
