# Feature Spec: BittyGPT Feedback Engine

## 🎯 Goal

*What do you want this feature to achieve?*

This feature aims to achieve a feedback loop for the prompt given by the user. The goal is to provide the user with ample feedback so that the user can learn about how they have created their prompt. What was good about it and what can be improved

## 🌟 Why This Matters

*Why is this important for the user experience or product vision?*

The goal of the product is to enhance prompt engineering. This feature is vital for a constructive learning and feedback loop. 

## 🔢 Inputs

*List the exact inputs needed for this system to work.*

- Role
- Directive
- Example (optional)
- Output Format (optional)
- Additional Context (optional)
- AI Model

## 📤 Outputs

*What should it generate? Be specific about format and content.*

- A 1–10 rating (based on prompt clarity and effectiveness)
- A short paragraph of feedback (in character/tone)
- Optional upgrade tip (e.g., “Try refining your directive”)

## 🔄 Flow

*Describe the steps from user action to output. Think trigger → process → result.*

1. User fills out the spell form
2. User clicks “Cast Spell”
3. API call sends prompt and returns LLM result —> user sees it immediately
4. Second call sends prompt to BittyGPT feedback engine —> Get’s feedback object
5. Engine returns feedback object (score + text)
6. UI displays result below the spell output in a styled panel

## ✨ Tone & Style

*What should the experience feel like? What voice should BittyGPT use?*

Feedback should be given based on the user’s selected role. If this is a old wise magician, the AI should act like this. If the user has defined a grumpy old men, the AI must stay in character, acting accordingly. 
The tone should depend on the character. The default should be magical, witty, encouraging but now overly critical. But the core of each tone of voice is that the AI is encouraging and not overly critical

## UX

![image.png](attachment:5bb6f16e-3341-4738-b41a-e6480bbc257b:image.png)

- Result should move into a seperate contain. Moving this from within the cast spell container to a seperate one.
- The feedback should be able to leave feedback to the result via 1-5 ⭐ rating. So that the model can learn and improve itself. Feedback and stars appear in a styled `BittyGPT Feedback` box below result.

## 🧪 MVP Scope

*What’s the smallest version you can build that still works well?*

- Analyze only the **Directive** and **Role** fields
- One feedback message + rating
- No persistence or saving yet

## 🛠 Optional Future Enhancements

*What ideas could be added later? Think in modules or layers.*

- Analyze more fields (context, format)
- Save feedback to Spellbook
- Visualize ratings over time
- Allow “Get feedback again” button
- Roleplaying mode