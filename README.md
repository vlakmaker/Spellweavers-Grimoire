# 🧙 Spellweaver's Grimoire

An interactive playground for crafting magical prompts using large language models. Designed as a creative prompt-building assistant, it allows users to compose structured prompts, cast them, and receive guided, in-character feedback from BittyGPT, your magical AI mentor.

## ✨ Features (MVP)

- 🎨 Five-part prompt builder: Role, Directive, Example, Format, Context
- 🪄 Cast spells to query LLMs (via OpenRouter)
- 🧙 In-character feedback engine that rates and improves your prompt
- 🌈 Elegant UI using Mantine and Tabler icons
- 🔑 Supports custom API keys (via localStorage)

## 🛠️ Tech Stack

- **Frontend:** React + Vite + TypeScript
- **Styling:** Mantine UI + Tabler Icons
- **Backend:** None (API calls directly from client)
- **LLM Provider:** OpenRouter (configurable)
- **Deployment-ready:** Docker container support

## 🚀 Getting Started (Dev)

```
git clone https://github.com/your-username/spellweaver-grimoire.git
cd spellweaver-grimoire
npm install
npm run dev
```

Create a `.env` file for local development if needed:

```
VITE_OPENROUTER_API_KEY=your_api_key_here
```

## 🐳 Run with Docker

### 1. Build and Run

```
docker build -t spellweaver .
docker run -d -p 80:3000 --env-file .env spellweaver
```

### 2. Access it

Visit `http://localhost` (or your server IP) in your browser.

### 3. Optional Nginx + SSL

If hosted on a VPS, consider adding a reverse proxy and enabling HTTPS using Let's Encrypt.

## 🌐 Deployment Plan

1. Create production `.env`
2. Push to GitHub
3. SSH into your Oracle Cloud VPS
4. Clone repo: `git clone ...`
5. Run Docker as above
6. Use Nginx or Caddy to serve the app over HTTPS

## 🔮 Next Steps (Post-MVP)

- Save + load spells from local storage or cloud
- Prompt history and versioning
- BittyGPT persona selector
- Spell scenario library
- UX polishing (spell scrolls, animations)

## 🧠 License & Credits

- MIT License
- Created by Veer & BittyGPT ✨

---

Let the spellcraft begin! 🧪