import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import { CardMedia, Card, Box, Link } from "@mui/material";
import "./agentdynex.css";

export default function AgentDynex() {
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
            src={require("./robin.png")}
          />
          <Button disableRipple href="/">
            <Typography className="link">back</Typography>
          </Button>
          <Button
            disableRipple
            href="https://arxiv.org/abs/2504.09662"
            sx={{ alignSelf: "flex-start" }}
          >
            <Typography className="link">arxiv</Typography>
          </Button>
          <Button
            disableRipple
            href="https://github.com/jennygzma/agentdynex"
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
            AgentDynEx: Nudging the Mechanics and Dynamics of Multi-Agent
            Simulations
          </Typography>
          <Typography variant="h6">
            Jenny Ma*, Riya Sahni*, Karthik Sreedhar, Lydia B. Chilton
          </Typography>
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./teaser.png")}
          />
          <Typography variant="h5"> Abstract </Typography>
          <Typography variant="body1">
            Multi-agent large language model simulations have the potential to
            model complex human behaviors and interactions. If the mechanics are
            set up properly, unanticipated and valuable social dynamics can
            surface. However, it is challenging to consistently enforce
            simulation mechanics while still allowing for notable and emergent
            dynamics. We present AgentDynEx, an AI system that helps set up
            simulations from user-specified mechanics and dynamics. AgentDynEx
            uses LLMs to guide users through a Configuration Matrix to identify
            core mechanics and define milestones to track dynamics. It also
            introduces a method called nudging, where the system dynamically
            reflects on simulation progress and gently intervenes if it begins
            to deviate from intended outcomes. A technical evaluation found that
            nudging enables simulations to have more complex mechanics and
            maintain its notable dynamics compared to simulations without
            nudging. We discuss the importance of nudging as a technique for
            balancing mechanics and dynamics of multi-agent simulations.
          </Typography>
          <Typography variant="h5"> Motivation </Typography>
          <Typography variant="body1">
            Simulations of human behavior can help policymakers anticipate how
            people might react to new policies. This approach enables
            decision-makers to avoid negative outcomes, promote prosocial
            behaviors, and surface unintended consequence. Prior work has shown
            that multi-agent large language model (LLMs) simulations demonstrate
            human-like agency. In these simulations, agents can take unexpected
            actions, act strategically, bend rules, and operate outside of
            standard constraints. They can also unexpectedly collaborate,
            collude, and act strategically to get what they want. However, this
            agency cuts both ways. Agents might ignore their objectives, violate
            spatial constraints, or take actions that do not align with the
            simulated world. For example, an agent might go on vacation during
            an economic negotiation or simply refuse to act. This behavior
            undermines the simulation. Every simulation operates within a
            structured environment: a set of social, spatial, and procedural
            constraints that define what is possible and meaningful. When these
            rules are broken, the results of the simulation become less
            meaningful. Thus, it is important to define the structure of a
            multi-agent simulation to get good agency from agents, where actions
            are consistent with that of the real world, but also curb bad
            agency, actions inconsistent with the real world.
            <br />
            <br />
            When modeling biological, social, or technological systems, two
            fundamental dimensions come into play: mechanics and dynamics.
            Mechanics are the rules, roles, and structures that define the
            environment and its players. For example, in chess, the mechanics
            include the board setup, the movement rules for each piece, and the
            winning conditions. Dynamics refer to the behaviors that emerge
            while the system is running. These include the actions of players,
            their reactions to each other, and their adaptations to the
            environment or other players’ actions. In sociology, a long standing
            debate existed between what ultimately shaped society—whether
            society was shaped more by structural factors (such as laws,
            institutions, norms, and economic forces), or by individual human
            agency—the ability to act, choose, and change the world. Giddens’
            influential structuration theory bridged the longstanding divide
            between structure and agency in the social sciences, showing that
            there are recursive feedback loops between them. Thus, when creating
            simulations of society, it is important to replicate both the
            structure of the real world and the dynamic interactions among
            people.
            <br />
            <br />
            In a simulation, it is challenging to ensure that the mechanics are
            consistently respected, and that dynamics are still notable. When
            there is too much structure in a simulation, we can suppress natural
            behavior and flatten the emergent dynamics we’re trying to observe.
            Removing structure altogether leads to the opposite problem. Agents
            may just chat endlessly or go off-script—say, take a vacation
            instead of responding to a homework policy. Without mechanics to
            constrain and guide them, the simulation lacks the scaffolding
            needed to produce meaningful behaviors and interesting dynamics.
            <br />
            <br />
            It is crucial to strike a balance between mechanics and
            dynamics—designing enough mechanics in the simulation environment to
            encourage specific behaviors without overconstraining the agents or
            stripping away their autonomy. To set up useful multi-agent
            simulations, we must ensure that the simulation adheres to its
            predefined mechanics while allowing agent dynamics to be both
            complex and autonomous. Our approach is to create structural
            checkpoints that can serve as criteria for success before running a
            simulation. These checkpoints act as soft constraints: they preserve
            the integrity and coherence of the simulation without stifling its
            ability to evolve organically. They also provide reference points
            that allow us to monitor progress over time and gently nudge the
            system back on course when it begins to drift. This approach helps
            strike a balance between mechanics and dynamics—ensuring simulations
            remain grounded in their intended rules while still supporting a
            rich spectrum of emergent behaviors.
          </Typography>
          <Typography variant="h5"> System Overview </Typography>
          <Typography variant="body1">
            We introduce AgentDynEx, an LLM-based method to set up novel
            simulations based on user-specified mechanics and dynamics. The user
            first inputs a scenario they want to simulate. Next, AgentDynex
            helps the user create a configuration file to set up the simulation.
            The setup has two parts: 1) the world of the simulation (consisting
            of the Agents, Actions, and Locations) that describe the general
            mechanics of the simulation, and 2) the checkpoints of the
            simulation (consisting of the Milestones, Stop Conditions, and
            Failure Conditions) that help track the dynamics of the system. This
            informs the user if simulation is going off course and might need to
            be interrupted. While the simulation is running, AgentDynEx
            generates intermediate summaries of the simulation’s progress, and
            introduces a method called nudging to gently intervene in the
            simulation if it falls off course. AgentDynEx supports two modes of
            intervention: 1) automatic nudging through dynamic reflection, where
            the system continuously reflects on the simulation progress and
            intervenes if necessary, and 2) nudging through manual intervention,
            where a human operator can step in at any point to recover from
            deviations. These nudges are intentionally minimal; they don’t alter
            the fundamental trajectory of the simulation, but gently guide it
            back toward its intended path.
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
            src={require("./system_tracking.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./system_reflection.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./usage_matrix.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./usage_nudging.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./usage_tracking.png")}
          />
          <img
            className="mx-auto rounded w-2/3 object-scale-down"
            style={{ width: "100%" }}
            alt="teaser"
            src={require("./usage_reflection.png")}
          />
          <Typography variant="h5"> User Evaluation </Typography>
          <Typography variant="body1">
            We conduct a technical evaluation to measure AgentDynEx as a system
            for setting up the mechanics and dynamics of multi-agent
            simulations. In our formative study, we concluded that holistic
            reflection is not enough to support the mechanics and dynamics of
            simulations. Thus, our technical evaluation measures the
            effectiveness of nudging as a method for balancing mechanics and
            dynamics.
            <br />
            <br />
            • RQ1: Automatic Nudging - To what extent does automatic nudging
            contribute to simulation success?
            <br />
            • RQ2: Manual Nudging - To what extent does manual nudging
            contribute to simulation success?
            <br />
            • RQ3: Nudging Combined with Holistic Reflection - To what extent
            does nudging combined with holistic reflection contribute to
            simulation success?
            <br />
            <br />
            Our evaluation was conducted through a quantitative study of 7
            different simulation scenarios that span a range of social dynamics
            and logical complexity. Scenarios varied from highly structured,
            multi-round formats, such as debate tournaments, to more fluid
            situations, such as friends planning a trip. We selected social
            dimensions including cooperation vs competition, negotiation
            dynamics, personality assertiveness.
            <br />
            <br />
            We created 6 variations of each scenario for a total of 42
            simulations:
            <br />
            • Baseline - Simulations run purely from the configuration file
            generated by AgentDynEx (no nudging, no holistic reflection)
            <br />
            • Baseline+Reflection - Simulations with holistic reflection (and no
            nudging)
            <br />
            • AutomaticNudging - Simulations only with automatic nudging (and no
            holistic reflection)
            <br />
            • AutomaticNudging+Reflection - Simulations with both automatic
            nudging and holistic reflection
            <br />
            • ManualNudging - Simulations only with manual nudging (and no
            holistic reflection)
            <br />
            • ManualNudging+Reflection - Simulations with both manual nudging
            and holistic reflection
            <br />
            <br />
            <br />
            Because simulations can produce non-deterministic outputs and
            occasionally crash, we executed each simulation 3 times and selected
            the best run. Each simulation ran for 20–25 minutes before being
            manually terminated. They had 3-7 agents depending on the scenario.
            All simulations without holistic reflection (Baseline,
            AutomaticNudging, and ManualNudging) used the same configuration
            file. All simulations with holistic reflection (Baseline+Reflection,
            AutomaticNudging+Reflection, and ManualNudging+Reflection) used the
            same configuration file—an updated configuration from the Baseline’s
            configuration after holistic reflection. In the simulations with
            manual nudging, a human operator could intervene at any point based
            on their own judgment. In the simulations with automatic nudging,
            every recommended nudge is applied to the simulation.
            <br />
            <br />
            We evaluated our simulations based on their 1) mechanics and 2)
            dynamics, as we did in the formative study. The mechanics were
            assessed based on a set of five predefined milestones per scenario,
            designed to represent key logical checkpoints. To ensure consistency
            across simulations, 2 authors manually defined five milestones for
            each scenario. Dynamics were also rated similarly on a 1–5 scale,
            with 1 being the simulation exhibited few notable dynamics in each
            completed milestone, and 5 indicating that the simulation
            demonstrated notable dynamics in every completed milestone. The
            authors manually annotated each simulation for notable dynamics
            within each completed milestone.
            <br />
            <br />
            We hypothesize that simulations with nudging will have better
            mechanics than those without nudging and that simulations will have
            the same, if not better dynamics with nudging. Our hypothesis were
            as follows:
            <br />
            • H1 - Automatic Nudging Matters: Simulations with automatic nudging
            will outperform simulations without nudging in mechanics.
            <br />
            • H2 - Manual Nudging Matters: Simulations with manual nudging will
            outperform simulations with automatic nudging in mechanics.
            <br />
            • H3 - Holistic Reflection Matters: Simulations with holistic
            reflection will outperform simulations without holistic reflection
            in mechanics.
            <br />
          </Typography>
          <Typography variant="h5"> Results </Typography>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <img
              className="mx-auto rounded w-2/3 object-scale-down"
              style={{ width: "100%" }}
              alt="beat alignment"
              src={require("./table.png")}
            />
          </Box>
          <Box sx={{ backgroundColor: "white", padding: "20px" }}>
            <Stack direction="row" spacing="10px">
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                style={{ width: "32%" }}
                alt="evaluation"
                src={require("./H1graph.png")}
              />
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                style={{ width: "32%" }}
                alt="evaluation"
                src={require("./H2graph.png")}
              />
              <img
                className="mx-auto rounded w-2/3 object-scale-down"
                style={{ width: "32%" }}
                alt="evaluation"
                src={require("./H3graph.png")}
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
              @misc{"{"}ma2025agentdynexnudgingmechanicsdynamics,
              <br />
              &nbsp;&nbsp;title={"{"}AgentDynEx: Nudging the Mechanics and
              Dynamics of Multi-Agent Simulations{"}"}, <br />
              &nbsp;&nbsp;author={"{"}Jenny Ma and Riya Sahni and Karthik
              Sreedhar and Lydia B. Chilton{"}"},<br />
              &nbsp;&nbsp;year={"{"}2025{"}"},<br />
              &nbsp;&nbsp;eprint={"{"}2504.09662{"}"},<br />
              &nbsp;&nbsp;archivePrefix={"{"}arXiv{"}"},<br />
              &nbsp;&nbsp;primaryClass={"{"}cs.MA{"}"}, <br />
              {"}"}
            </code>
          </Box>
        </Stack>
      </Stack>
    </section>
  );
}
