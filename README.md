# NEURA<span>TALK</span>

> "You ever had trouble understanding a topic or hard to understand your teacher? With NeuraTalk you can study anything you want the smart, easy way."

NeuraTalk is an AI-powered mobile study app that helps you actually understand what you're learning — not just memorize it. Instead of re-reading notes or watching videos passively, you explain the topic out loud to an AI that listens, asks you clarifying questions, corrects you when you're wrong, and answers when you're stuck. Think of it as a study partner that never gets tired and always knows the material.

The app is built on the **Feynman Technique** — the proven learning method that says the best way to understand something is to teach it to someone else.

---

## 🚧 Status

Currently in active development — V1 shipping in 6–7 weeks.

**Live demo:** _Coming soon_

---

## 📱 What It Does

- **Talk through what you're learning** — speak your explanation out loud, the AI listens in real time
- **AI asks probing questions** — not to test you, but to deepen your understanding
- **Get corrected and unstuck** — AI corrects wrong explanations and answers when you don't know
- **Every session is saved** — come back and review full transcripts anytime
- **End of session feedback** — AI generates a summary of your strengths, gaps, and what to review next
- **AI remembers past sessions** — pick up where you left off on any topic

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Mobile Frontend | React Native + Expo |
| Styling | NativeWind (Tailwind CSS) |
| Backend | Node.js + Express + TypeScript |
| Database ORM | Prisma |
| Database | PostgreSQL (Neon) |
| Speech to Text | OpenAI Whisper API |
| AI Brain | OpenAI GPT-4o |
| Text to Speech | ElevenLabs API |
| Auth | JWT + bcrypt |
| Deployment | Vercel + Render + Neon |

---

## 🗂️ Project Structure

```
neuratalk/
├── mobile/          # React Native (Expo) frontend
│   ├── app/
│   │   ├── screens/       # LoginScreen, RegisterScreen, HomeScreen, StudyScreen...
│   │   ├── navigation/    # App navigation config
│   │   ├── components/    # Reusable UI components
│   │   └── services/      # API calls to backend
├── backend/         # Node.js + Express API
│   ├── src/
│   │   ├── routes/        # API route definitions
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/     # Auth middleware
│   │   └── server.ts      # Entry point
│   └── prisma/
│       └── schema.prisma  # Database models
└── README.md
```

---

## ⚙️ Local Setup

### Prerequisites
- Node.js v18+
- Expo CLI
- PostgreSQL database (or Neon free tier)

### Backend

```bash
cd backend
npm install
cp .env.example .env   # Fill in your environment variables
npx prisma migrate dev
npm run dev
```

### Mobile

```bash
cd mobile
npm install
npx expo start
```

### Environment Variables

**backend/.env**
```
PORT=5000
DATABASE_URL=your_neon_postgres_url
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_key
ELEVENLABS_API_KEY=your_elevenlabs_key
```

---

## 🎯 Tier System

| Tier | Shape | Sessions | Features |
|---|---|---|---|
| Starter | 🔲 Cube | 10/month | Basic AI, 30-day history |
| Pro | 🔵 Sphere | Unlimited | Full history, AI topic memory |
| Scholar | 🔺 Pyramid | Unlimited | Pro + priority response speed |
| Genius | ⚛️ Atom | Unlimited | Scholar + early feature access |

---

## 🗺️ Roadmap

- [x] Project architecture and SDLC planning
- [x] Backend server setup (Express + TypeScript)
- [ ] Database models and Prisma setup
- [ ] Authentication (register, login, JWT)
- [ ] Frontend screens (Login, Register, Dashboard)
- [ ] Core AI study session feature
- [ ] Session history and transcript saving
- [ ] AI feedback summary
- [ ] ElevenLabs voice integration
- [ ] Deployment

---

## 👤 Author

**Pierre** — Full stack developer building real products with real purpose.

_NeuraTalk is part of an active portfolio built to demonstrate full-stack mobile development, AI integration, and product thinking._

---

## 📄 License

MIT