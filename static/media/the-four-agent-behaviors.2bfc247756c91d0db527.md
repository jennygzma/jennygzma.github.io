Vibe-coding is both amazing and infuriating. Tools like Cline and Cursor have completely transformed how I work. If I want to spin up a brand-new app from scratch? **Holy shit, it’s magic.** It’s fast, it’s fluid, it feels like collaborating with an engineer who’s always in a good mood.

But the moment I ask it to do something more risky, tricky, or unspecified—where my particular taste and coding style matters, like adding a decently complex feature to a codebase I care about—I’m suddenly fighting with it. Vibe-coding devolves into vibe-debugging, vibe-backtracking, vibe-arguing.

![teaser](/assets/the-four-agent-behaviors.md/blog_teaser.png)

After vibe-coding with Cline, I isolated **four recurring agent behaviors** behind most vibe-coding failures:


## 1. Skipping Steps

The agent confidently says it will do something (“I’ll build the backend and the frontend!”) and then only builds half. It claims it followed its own plan, but quietly skips steps and forgets entire chunks of functionality.


## 2. Ignoring Conventions and Style

Even with clear patterns in my codebase — and even with explicit rules — the AI still goes rogue. It adds docstrings when I never use them, rearranges file structures, overengineers components, and generally does not code the way I code.


## 3. Making Wrong Assumptions

Because it’s so eager to help, the agent commits to the first interpretation it forms. It builds whole flows and architectures around assumptions I would’ve corrected if it had asked one more question.


## 4. Local Optimization (Hacking Instead of Engineering)

Agents love the quickest apparent fix. For example, when writing code for a Rubik’s cube app, it might try to hardcode cube states instead of writing a real solver. When debugging, instead of addressing the root underlying cause, the agent fixes whatever surface-level symptom happens to be closest to the error.  This can lead to random edits, such as wrapping everything in `try/catch` instead of fixing the core functionality.

---

# How Can We Make Agents Behave?

A lot of fixes are already out there, but none of them seem to work. What these solutions all lack is **enforcement** — of rules, of context.

Cursor Rules and Cline Memory Bank are two popular approaches that I’ve tried:
- @aashari’s [Cursor Rules](https://gist.github.com/aashari/07cc9c1b6c0debbeb4f4d94a3a81339e) gives agents a set of rules and prompt templates that force the agent to go through a cycle of plan -> code -> test -> debug -> reflect. But the problem is that the agents don’t follow the rules.  
- [Cline Memory bank](https://docs.cline.bot/prompting/cline-memory-bank) is a set of structured files that act as long-term memory for the AI, storing key information about your project like your coding conventions, spec details, preferences, project status, etc. However, the agent can disregard the memory! 

These files Cline and Cursor add are just add text -- they are not enforced. **Without structures that enforce these behaviors to actually happen, agents will continue to misbehave.**

Plans will continue not to be followed.  
Rules will conflict.  
Reflections will be shallow.  
Context files will grow huge and meaningless.  
The agent ends up with more text, but not understanding.

---

# How Can We Enforce Rules?

For each of the four problems above, I break down how each attempted solution falls short, and provide real, simple strategies I use to enforce rules. 

## 1. Skipping Steps
![teaser](/assets/the-four-agent-behaviors.md/blog_1.png)
### **Attempted Solution**  
Cursor Rules and Cline Memory Bank force agents to “think” by generating a detailed plan before coding. But agents still freely **ignore their own plan** — skipping steps, leaving functionality incomplete, or declaring a feature “done” when core behavior is missing.

### **Real Solution**  
Force the agent to write its plan into a separate file.  
After completing each step, it must, review the step, test the step, and check off the step before moving on. This prevents agents from quietly skipping steps or abandoning half the implementation.

## 2. Ignoring My Conventions and Style
![teaser](/assets/the-four-agent-behaviors.md/blog_2.png)
### **Attempted Solution**  
Cursor and Cline let users write rule files describing their coding preferences. Cline’s Memory Bank tracks project patterns for reuse across tasks. However, the context can grow huge and rules begin to conflict, and the agent has no idea what rule to follow. 

### **Real Solution**  
Have the agent **learn** conventions from the repository and past interactions.  For every task, it must:

- retrieve only the rules relevant to the current context  
- detect rule conflicts  
- automatically resolve them or surface the rules to the user for them to resolve

This stops the agent from randomly picking whichever rule feels right.


## 3. Making Wrong Assumptions
![teaser](/assets/the-four-agent-behaviors.md/blog_3.png)
### **Attempted Solution**  
Cursor and Cline encourage “clarifying questions," but the questions are usually shallow.  They don’t ask the actual gating questions that determine architecture or flow. Agents don’t know what they don’t know, so they commit to the first interpretation and build entire implementations around it. If the user doesn't catch the error immediately, the mistakes will snowball.

### **Real Solution**  
Teach agents to recognize *when* they're missing information. Make the agent:
- analyze past chats for misunderstanding patterns  
- identify points where clarification is historically needed  
- store “critical questions” and answers in a separate reference file  
- refine its judgment for when and what to ask  

This helps catch misunderstandings before writing code based on a wrong assumption.

## 4. Local Optimization (Hacking Instead of Engineering)
![teaser](/assets/the-four-agent-behaviors.md/blog_4.png)
### **Attempted Solution**  
Attempted Solution: Cursor Rules’ prompts ask the coding agent to think about a solution that would be globally compatible. Cline’s Memory Bank stores the project state and existing progress so the agent has more global context. This is a major improvement over raw LLMs — they find bugs faster and more reliably and build code with more foresight. 

However, for larger, more complex bugs, Cursor Rules identifies root causes, but doesn’t enforce solving them the right way. 

### **Real Solution**  
Combine the first three solutions:
1. detect root cause  
2. write a global, end-to-end plan  
3. follow every step with check-offs  
4. enforce style and preference rules  
5. ask for clarification where needed  

---

# Final Thoughts

In the end, all of these solutions are just **simple enforcement mechanisms** that make the agent actually do what it claims.

Stay tuned for the next posts, where we’ll break down:

- the subtle bugs agents generate  and why vibe-debugging is needed  
- and the ways we’ve tried to fix these failures in real systems!

