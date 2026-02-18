export const writingTips = [
  {
    id: "start-with-problem",
    title: "Start With the Problem",
    icon: "Target",
    description:
      "Hook your reader in the first two sentences. Name the exact frustration they feel — then promise a solution.",
    example: `# Start With the Problem

Your opening decides everything. Readers give you **two sentences** before they scroll away.

---

## Weak Opening

In this article, I will explain how to use React hooks. React is a JavaScript library made by Facebook. Hooks were added in version 16.8 and they changed how we write components...

**Why it fails:** You're talking about yourself ("I will explain") and giving a history lesson nobody asked for.

---

## Strong Opening

Your React component re-renders 14 times on a single click. You have tried \`useMemo\`, \`useCallback\`, even splitting components — nothing works. Here is why, and the fix takes 5 minutes.

**Why it works:**
- Names a **specific pain** (re-renders 14 times)
- Shows **empathy** (You have tried everything)
- Promises a **clear outcome** (fix takes 5 minutes)

---

## The Formula

> [Specific problem] + [Empathy] + [Promise of solution]

Try writing your own opening below. Pick a topic you know and hook the reader fast.`,
  },
  {
    id: "write-like-you-talk",
    title: "Write Like You Talk",
    icon: "MessageCircle",
    description:
      "Forget academic language. Use short sentences, say \"you\" and \"I\", and write like you are explaining something to a colleague.",
    example: `# Write Like You Talk

The best technical posts sound like a smart friend explaining something over coffee — not a textbook.

---

## Formal (Stiff)

It is advisable to utilize environment variables for the purpose of storing sensitive configuration data. The implementation of this methodology ensures that credentials are not inadvertently committed to version control systems.

## Conversational (Clear)

Store your secrets in environment variables — not in your code. This way, you will never accidentally push a password to GitHub.

---

## Simple Rules

1. **Use "you" and "I"** — Write "You can fix this by..." not "One might consider..."
2. **Short sentences** — If a sentence has more than 20 words, split it
3. **Common words** — "use" not "utilize", "start" not "initiate", "show" not "demonstrate"
4. **Read it out loud** — If it sounds weird when spoken, rewrite it

---

## For Non-Native Speakers

This rule is your best friend. You do not need fancy vocabulary. Simple English IS professional English. The best writers in tech use short, clear words.

> "If you can say it simply, say it simply."`,
  },
  {
    id: "one-idea-per-paragraph",
    title: "One Idea Per Paragraph",
    icon: "AlignLeft",
    description:
      "Keep paragraphs short — 2 to 4 sentences max. White space makes your post easy to read and less intimidating.",
    example: `# One Idea Per Paragraph

Online reading is different from book reading. People scan. They jump. They leave if the text looks dense.

---

## Wall of Text (Hard to Read)

React hooks changed how we write components. Before hooks, you had to use class components for state and lifecycle methods. This made simple components complicated. With hooks, you can use useState for state and useEffect for side effects. The code is shorter and easier to understand. You should also learn useContext for sharing data and useReducer for complex state. Custom hooks let you reuse logic between components. Many developers prefer hooks because they reduce boilerplate and make testing easier.

## Broken Up (Easy to Read)

React hooks changed how we write components.

Before hooks, you needed class components for state and lifecycle methods. This made simple things complicated.

With hooks, everything is simpler:
- \`useState\` for state
- \`useEffect\` for side effects
- \`useContext\` for shared data

The code is shorter. Testing is easier. There is less boilerplate.

---

## The Rule

**One paragraph = one idea.** When you move to a new thought, hit Enter twice.

Use **lists** when you have 3 or more related items. Lists are easier to scan than sentences.`,
  },
  {
    id: "show-code-first",
    title: "Show the Code First",
    icon: "Code",
    description:
      "Developers scan for code blocks. Show the solution first, then explain how it works step by step.",
    example: `# Show the Code First

Developers are busy. They scroll until they find a code block, read it, and THEN read your explanation if they need more context.

---

## Bad: Explain, Explain, Explain... Then Code

To debounce a function in JavaScript, you need to understand closures and setTimeout. A closure is created when a function remembers the variables from its outer scope. We can use this with setTimeout to delay execution. The clearTimeout function cancels pending timeouts. By combining these concepts, we can create a reusable debounce utility...

\`\`\`js
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
\`\`\`

## Good: Code First, Then Explain

\`\`\`js
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
\`\`\`

**How it works:**
1. \`debounce\` takes a function and a delay time
2. It returns a new function that wraps the original
3. Each call resets the timer with \`clearTimeout\`
4. The original function only runs after the delay passes with no new calls

**Use it like this:**

\`\`\`js
const handleSearch = debounce((query) => {
  fetchResults(query);
}, 300);
\`\`\`

---

## Why This Works

- Developers find the code block instantly
- They can try it immediately
- They read the explanation only if they need it`,
  },
  {
    id: "headers-tell-story",
    title: "Headers Tell a Story",
    icon: "Map",
    description:
      "Someone should understand your entire post by reading ONLY the headers. Each header is the next chapter of your story.",
    example: `# Headers Tell a Story

Good headers work like a table of contents. A reader should understand your post without reading a single paragraph.

---

## Bad Headers

- Introduction
- Main Part
- Details
- More Information
- Conclusion

**Problem:** These headers say nothing. "Main Part" of what?

## Good Headers

- The Bug: API Calls Firing Twice in React
- Why It Happens: StrictMode Runs Effects Twice
- The Fix: Add a Cleanup Function
- Bonus: How to Detect This Earlier
- Key Takeaway: Always Clean Up Your Effects

**Why this works:** You can skip the entire article and still learn something from these headers alone.

---

## Header Writing Tips

1. **Be specific** — "How to Fix It" vs "Add an AbortController to useEffect"
2. **Use action words** — "Setting Up the Database" not "Database"
3. **Follow a logical flow** — Problem, Cause, Solution, Prevention
4. **Keep them short** — Under 10 words is ideal

---

## Test Your Headers

Copy your headers into a list. Read only the headers. Does the story make sense? If not, rewrite them.`,
  },
  {
    id: "cut-ruthlessly",
    title: "Cut Ruthlessly",
    icon: "Scissors",
    description:
      "Your first draft is always too long. Read it again and remove every word that does not earn its place.",
    example: `# Cut Ruthlessly

> "I did not have time to write you a short letter, so I wrote you a long one." — Mark Twain

Short writing is harder than long writing. But it is worth the effort.

---

## Before (67 words)

In order to successfully implement authentication in your application, it is important to first understand that there are basically two main approaches that you can take. The first approach is to use session-based authentication, and the second approach is to use token-based authentication (such as JWT). Each approach has its own advantages and disadvantages that you need to consider carefully.

## After (25 words)

There are two main ways to handle authentication: **sessions** and **tokens (JWT)**. Each has trade-offs. Here is when to use which.

---

## Words to Cut

| Instead of | Write |
|---|---|
| in order to | to |
| it is important to note that | (delete it) |
| basically | (delete it) |
| in the process of | while |
| a large number of | many |
| at this point in time | now |
| due to the fact that | because |
| has the ability to | can |
| in the event that | if |
| prior to | before |

---

## The 30% Rule

After your first draft, try to cut 30% of the words. You will be surprised — the post gets **better**, not worse.`,
  },
  {
    id: "be-honest",
    title: "Be Honest and Human",
    icon: "Heart",
    description:
      "Share your struggles. Admit what you do not know. Readers trust authenticity more than perfection.",
    example: `# Be Honest and Human

The internet has enough "10x developer" content. What readers actually connect with is honesty.

---

## Robotic

This comprehensive guide covers all aspects of deploying a Node.js application to production. Follow these optimized steps for a seamless deployment experience.

## Human

I mass-deleted my production database last Tuesday. Here is what I learned about deployment safety — so you do not make the same mistake.

---

## Phrases That Build Trust

- "I struggled with this for two days before it clicked."
- "I am not sure if this is the best approach, but it works and here is why."
- "This is what I wish someone had told me when I started."
- "I still do not fully understand [X], but here is what I know so far."
- "Update: a reader pointed out a better way. See the edit below."

## Phrases That Feel Fake

- "In this comprehensive guide..."
- "As a seasoned developer..."
- "The definitive solution to..."
- "You should always..."

---

## Why Honesty Works

1. **Readers see themselves in you** — Your struggle is their struggle
2. **It sets realistic expectations** — Not everything is easy, and that is okay
3. **It invites discussion** — People share their own approaches in the comments
4. **It is memorable** — Facts are forgotten, stories stick

---

## For Non-Native Speakers

Your journey of learning tech in a second language is a story worth telling. Do not hide it — it makes you relatable to millions of developers worldwide.`,
  },
  {
    id: "end-with-action",
    title: "End With Action",
    icon: "Rocket",
    description:
      "Never let your post just stop. Give readers something to do — try the code, explore further, or share their experience.",
    example: `# End With Action

A great post does not just stop — it sends the reader somewhere.

---

## Weak Ending

So that is how you use WebSockets in Node.js. I hope this article was helpful. Thank you for reading.

**Problem:** "I hope this was helpful" is filler. It gives the reader nothing.

## Strong Ending

Now you know how to set up real-time communication with WebSockets.

**Try this next:**
1. Add a "user is typing" indicator to the chat
2. Handle reconnection when the connection drops
3. Add rooms so users can join different conversations

If you build something with this, share it in the comments — I would love to see it.

**Want to go deeper?** Here is the MDN WebSocket reference: [link]

---

## Ending Formulas That Work

**The Challenge:**
> "Try building [specific thing] with what you learned. Share your result!"

**The Next Step:**
> "This covers the basics. In Part 2, we will add [next feature]."

**The Question:**
> "How do you handle [topic] in your projects? I am curious about different approaches."

**The Summary:**
> "Key takeaways: [3 bullet points]. Bookmark this for your next project."

---

## Why It Matters

A strong ending:
- Increases comments and engagement
- Makes readers remember your post
- Builds your audience (they come back for Part 2)
- Shows you care about the reader's next step, not just your word count`,
  },
];

export const templates = [
  {
    id: "tutorial",
    title: "Tutorial / How-To",
    icon: "BookOpen",
    description:
      "Step-by-step guide that teaches one specific thing. The most popular format on dev.to.",
    template: `---
title: How to [Do Something] with [Technology]
published: false
tags: webdev, tutorial, beginners, javascript
---

## What You Will Build

[One sentence describing the end result. Add a screenshot or GIF if you can.]

## Before You Start

You will need:
- Node.js (v18 or higher)
- Basic knowledge of [X]
- A code editor

## Step 1: Set Up the Project

[Brief explanation of what this step accomplishes.]

\`\`\`bash
mkdir my-project && cd my-project
npm init -y
\`\`\`

## Step 2: Install Dependencies

[Why you need each package.]

\`\`\`bash
npm install express dotenv
\`\`\`

## Step 3: Write the Core Logic

[Show the code first, then explain it.]

\`\`\`js
// your code here
\`\`\`

**What is happening here:**
1. Line 1: ...
2. Line 3: ...
3. Line 5: ...

## Step 4: Test It

\`\`\`bash
npm start
\`\`\`

You should see: [expected output]

## Common Mistakes

- **[Mistake 1]:** [How to fix]
- **[Mistake 2]:** [How to fix]

## What You Learned

- [Key takeaway 1]
- [Key takeaway 2]
- [Key takeaway 3]

## Next Steps

Try extending this by adding [feature]. Or check out [related resource].

---

*Found this useful? Follow me for more practical tutorials.*`,
  },
  {
    id: "til",
    title: "Today I Learned",
    icon: "Lightbulb",
    description:
      "Short, focused post about a single discovery. Quick to write, surprisingly popular.",
    template: `---
title: "TIL: [The Thing You Learned]"
published: false
tags: todayilearned, webdev, javascript, beginners
---

I have been using [technology] for [time period] and I just discovered something that I wish I had known on day one.

## The Problem

[What you were trying to do in 1-2 sentences.]

\`\`\`js
// What I was doing before
\`\`\`

This works, but [what is wrong with it].

## The Discovery

[What you found, in 1-2 sentences.]

\`\`\`js
// The better way
\`\`\`

## Why This Is Better

- [Reason 1]
- [Reason 2]

## When to Use This

[One sentence about when this applies and when it does not.]

---

*What is something you learned recently that surprised you? Drop it in the comments!*`,
  },
  {
    id: "bug-fix",
    title: "Bug Fix Story",
    icon: "Bug",
    description:
      "Walk through a real bug from confusion to solution. Readers love detective stories.",
    template: `---
title: "How I Fixed: [Describe the Bug in Plain English]"
published: false
tags: debugging, webdev, javascript, beginners
---

## The Bug

[What happened. Be specific.]

\`\`\`
Error: [paste the actual error message]
\`\`\`

This happened when [exact conditions].

## What I Tried First

**Attempt 1:** [What you tried and why it did not work.]

**Attempt 2:** [What you tried next.]

At this point, I had spent [time] and was stuck.

## The Breakthrough

[What led you to the real cause. A Stack Overflow answer? Reading the docs? A colleague?]

## The Root Cause

[Explain WHY the bug happened, not just WHAT you changed.]

\`\`\`js
// The problematic code
\`\`\`

The issue was [clear explanation].

## The Fix

\`\`\`js
// The fixed code
\`\`\`

**What changed:** [1-2 sentences explaining the fix.]

## How to Prevent This

- [Actionable prevention tip 1]
- [Actionable prevention tip 2]

## Key Takeaway

[One sentence lesson that applies beyond this specific bug.]

---

*Have you hit this bug before? How did you solve it?*`,
  },
  {
    id: "project-showcase",
    title: "Project Showcase",
    icon: "FolderOpen",
    description:
      "Show off what you built. Great for portfolios and getting feedback from the community.",
    template: `---
title: "I Built [Project Name] — Here is What I Learned"
published: false
tags: showdev, webdev, opensource, javascript
---

## What It Does

[2-3 sentences. What problem does it solve? Who is it for?]

**Live demo:** [link]
**Source code:** [GitHub link]

## Why I Built This

[The personal reason. What problem were you facing? What motivated you?]

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | [React, Vue, etc.] |
| Backend | [Node.js, Python, etc.] |
| Database | [PostgreSQL, MongoDB, etc.] |
| Deployment | [Vercel, Railway, etc.] |

**Why these choices:** [1-2 sentences justifying your stack.]

## The Hardest Part

[Be honest about what challenged you. Show the problem and your solution.]

\`\`\`js
// The tricky code or approach
\`\`\`

## What I Would Do Differently

- [Lesson 1]
- [Lesson 2]

## What I Learned

1. [Technical lesson]
2. [Process lesson]
3. [Personal lesson]

## What Is Next

- [ ] [Planned feature 1]
- [ ] [Planned feature 2]
- [ ] [Planned feature 3]

---

*Feedback welcome! What would you add or change?*`,
  },
];

export const wordBank = [
  { weak: "utilize", strong: "use" },
  { weak: "implement", strong: "build / add / set up" },
  { weak: "in order to", strong: "to" },
  { weak: "a large number of", strong: "many" },
  { weak: "at this point in time", strong: "now" },
  { weak: "in the event that", strong: "if" },
  { weak: "prior to", strong: "before" },
  { weak: "subsequently", strong: "then / next" },
  { weak: "it is important to note", strong: "(just say the thing)" },
  { weak: "as a matter of fact", strong: "actually / in fact" },
  { weak: "due to the fact that", strong: "because" },
  { weak: "has the ability to", strong: "can" },
  { weak: "a sufficient amount of", strong: "enough" },
  { weak: "make a decision", strong: "decide" },
  { weak: "take into consideration", strong: "consider" },
  { weak: "in spite of the fact that", strong: "although" },
  { weak: "for the purpose of", strong: "to / for" },
  { weak: "at the present time", strong: "now / currently" },
  { weak: "with regard to", strong: "about" },
  { weak: "in the near future", strong: "soon" },
];

export const grammarTips = [
  {
    title: "Articles (a / an / the)",
    tips: [
      "Use \"the\" for something specific: \"the database\" (the one we are talking about)",
      "Use \"a/an\" for something general: \"a database\" (any database)",
      "Tech names usually have no article: \"React uses virtual DOM\" not \"the React\"",
      "When in doubt, read dev.to posts you like and notice how they use articles",
    ],
  },
  {
    title: "Prepositions That Trick You",
    tips: [
      "depends ON (not depends of/from)",
      "consists OF (not consists from)",
      "results IN (not results to)",
      "interested IN (not interested for)",
      "responsible FOR (not responsible of)",
      "different FROM (not different than/of)",
    ],
  },
  {
    title: "Tense Consistency",
    tips: [
      "Pick one tense per section and stick with it",
      "Tutorials: use present tense — \"Click the button. The modal opens.\"",
      "Bug stories: use past tense — \"The app crashed. I checked the logs.\"",
      "Do not switch between past and present in the same paragraph",
    ],
  },
  {
    title: "Quick Wins",
    tips: [
      "\"This is\" instead of \"There is\" — more direct",
      "Active voice: \"The function returns a value\" not \"A value is returned by the function\"",
      "Avoid double negatives: \"It is simple\" not \"It is not uncommon\"",
      "Use contractions in casual posts: \"don't\", \"it's\", \"you'll\" — they sound natural",
    ],
  },
];
