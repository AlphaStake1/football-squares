# Games
Samples of websites for fantasy football
# Football Squares

> Free-to-play NFL‑agnostic squares plus fantasy‑football resource hub.

![Status Badge](https://img.shields.io/badge/status-pre--MVP-yellow)

---

## Quick Links

| Asset | URL |
|-------|-----|
| **Figma Design File** | _TBD_ |
| **FigJam User Flow** | _TBD_ |
| **Loveable.dev Prototype** | _TBD_ |

---

## Overview

Football Squares is a web app that lets fans claim squares, follow live NFL scores, and win prizes, while discovering top fantasy‑football platforms.

---

## Tech Stack (Planned)

- **Frontend:** HTML/CSS, Vanilla JS → Future: Next.js or Astro
- **Design System:** Tailwind CSS tokens exported from Figma
- **Smart Contracts:** ERC‑721 mint endpoint (Hardhat / Foundry)
- **Wallet Integration:** WalletConnect v3
- **Backend/API:** Supabase (scores & user data)
- **CI/CD:** GitHub Actions + Vercel

---

## Local Development Setup

```bash
git clone https://github.com/your-org/football-squares.git
cd football-squares
# Install dependencies once framework is selected
# npm install
# npm run dev
```

---

## Roadmap

- [ ] MVP Homepage (hero, fantasy tiles, nav)
- [ ] Squares board purchase flow
- [ ] NFT mint + ledger sidebar
- [ ] Real‑time score webhook
- [ ] Email capture & weekly tips newsletter

---

## Contributing

We follow [Conventional Commits](https://www.conventionalcommits.org/) and feature‑branch workflow.

```bash
git checkout -b feature/your-feature
git commit -m "feat(board): add grid component"
git push origin feature/your-feature
```

Open a pull request to `main` when ready.

---

## License

MIT © 2025 Alpha Stake LLC  
*Not affiliated with the NFL or any professional team.*

---

### Disclaimer

This repository is in active development; functionality and architecture may change without notice.
