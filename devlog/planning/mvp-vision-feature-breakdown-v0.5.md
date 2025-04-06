# 🧱 Promptweaver's Grimoire: MVP Vision & Feature Breakdown (v0.5)

## 🌟 Core Concept

An interactive, magical-themed playground where users learn the art of prompt engineering by crafting "spells" — each spell representing a technique like Chain-of-Thought, Roleplay, or Prompt Structuring. Users select a spell path, build prompts, receive feedback, and slowly unlock new skills like an apprentice learning arcane arts.

---

## 🏠 User Flow Overview

### **1. Home Screen**

- Greeting + brief intro to the Grimoire.
- Two options:
    - ✨ *Begin Spellweaving* (leads to category selection)
    - 📖 *Browse the Spellbook* (view past crafted spells/tutorials)

### **2. Choose a Spell Type**

- Cards for each prompt technique category:
    - Thoughtcraft (e.g., Chain-of-Thought)
    - Structured Intent (e.g., full prompt structure)
    - Prompt Tinkering (optimization/mutation)
    - Persona Craft (role-based prompts)
    - Spell Trials (challenges or combos)

### **3. Prompt Crafting Arena**

- Structured editor to input:
    - 🔎 Directive
    - 🧙 Role
    - 📗 Example
    - 📆 Output format
    - 🧠 Context
- Real-time prompt preview panel
- ✨ "Cast Spell" button

### **4. Spell Evaluation**

- BittyGPT gives feedback based on rules or LLM:
    - ✅ Checkmarks or ❌ for missing components
    - Magical commentary
    - Star rating or glyph score
- Optional: Show AI output (OpenAI/Mistral API)

### **5. Save to Grimoire**

- Prompts saved locally (or later to cloud/user profile)
- Includes:
    - Prompt data
    - Score/feedback
    - Tags

---

## 🔧 MVP Feature Breakdown

### 1. ✨ **Spell Type Selector**

- Lets user choose a category
- UI: Scroll of cards
- No backend, just state routing

### 2. 🌟 **Prompt Editor (SpellCrafting Arena)**

- UI: Mantine-based form layout
- Live preview
- Cast Spell button
- API: Sends prompt to LLM (if configured)

### 3. 📊 **BittyGPT Feedback Panel**

- Feedback after spell is cast
- Mocked or rule-based at MVP
- Components: FeedbackPanel.tsx

### 4. 📖 **Static Spellbook**

- Displays prefilled tutorial spells
- UI: SpellCard + DetailModal
- Data from local JSON

### 5. 🎉 **Gamification UI (Optional)**

- Track how many spells cast
- Earn titles (e.g., Apprentice → Spellwright)
- XP bar or badges

### 6. 🌌 **Minimal Navigation**

- Mantine header with links: Home | Spellbook | Editor
- Responsive layout

---

## 📚 Future Phases (Post-MVP)

### 🧹 v1.0: Mentor Mode (Chat-Driven)

- BittyGPT guides user like a mentor
- One-chatbox loop for:
    - Selecting spell
    - Explaining steps
    - Typing prompt
    - Getting feedback
- More narrative, immersive

### 💲 Progression System

- Track mastery of spells
- Unlock new categories via quests
- Earn lore and magical glyphs

### 📺 Visual & Feedback Polish

- Animations for casting spells
- Magical effects on prompt success
- Spell history evolution chart

---

## 📊 Status Checklist

- 

---

##