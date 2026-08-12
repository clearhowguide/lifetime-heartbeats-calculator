# ❤️ Lifetime Heartbeats Calculator

Interactive science calculator for estimating lifetime heartbeats or converting a heartbeat total into equivalent years.

Built and maintained by [ClearHowGuide](https://clearhowguide.com/).

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-component-orange.svg)](https://astro.build/)
[![Privacy](https://img.shields.io/badge/calculations-local-blue.svg)](PRIVACY.md)

---

## 🚀 Live calculator

Official live version:

https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/

Science explainer:

https://clearhowguide.com/en/science/one-billion-heartbeats-mammals/

---

## ❤️ What it does

Lifetime Heartbeats Calculator provides two interactive calculation modes.

### Estimate lifetime heartbeats

Enter:

- heart rate in beats per minute;
- lifespan in years.

The calculator estimates:

```text
heart rate × 60 × 24 × 365.25 × years
```

### Convert heartbeats to equivalent time

Enter:

- total heartbeats;
- constant heart rate.

The calculator calculates:

```text
total heartbeats ÷ heart rate ÷ 60 ÷ 24 ÷ 365.25
```

Example:

```text
Heart rate: 30 bpm
Time: 65 years

Estimated total:
≈ 1.03 billion heartbeats
```

---

## ✨ Features

The current version includes:

- two calculator modes;
- decimal heart-rate and lifespan inputs;
- human-readable results;
- exact mathematical heartbeat totals;
- comparison with the one-billion-heartbeat reference;
- Elephant illustrative preset;
- Human illustrative preset;
- 1-billion-heartbeats preset;
- 2-billion-heartbeats preset;
- faster/slower heart-rate scenarios;
- input validation;
- copy-result functionality;
- shareable calculations through URL parameters;
- browser-native Web Share support where available;
- clipboard fallback;
- responsive mobile layout;
- keyboard-accessible tabs;
- ARIA live result announcements;
- reduced-motion support;
- light/dark theme compatibility through CSS variables;
- methodology disclosure;
- scientific disclaimer;
- local-only calculations.

---

## 🔗 Shareable calculations

Calculator states can be represented in a URL.

Example:

```text
https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/?mode=estimate&bpm=70&years=80
```

Or:

```text
https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/?mode=convert&beats=1000000000&bpm=60
```

This makes individual calculations easy to share, reference and discuss.

---

## 🔒 Privacy promise

The calculator performs its calculations locally in the browser.

The component does not need to:

- send calculator values to ClearHowGuide;
- send calculator values to PocketBase;
- save calculator inputs in a database;
- store calculator values in localStorage;
- store calculator values in sessionStorage;
- set cookies for calculator data;
- transmit calculator inputs to an analytics service.

See [PRIVACY.md](PRIVACY.md) for details.

---

## 🎯 Why this exists

The popular claim that mammals receive a fixed lifetime allowance of roughly one billion heartbeats is an oversimplification.

The calculator is designed to make the arithmetic behind the idea interactive.

Users can explore questions such as:

- How long would one billion heartbeats take?
- How long would three billion heartbeats take?
- How many heartbeats occur over 70 years?
- How does heart rate change the mathematical result?
- Why can a shrew and an elephant sometimes appear to fall into a similar lifetime-heartbeat range?

The calculator is an educational mathematics and comparative-biology tool.

It is not a lifespan predictor.

---

## 🧮 Methodology

The calculator uses:

```text
365.25 days per year
```

### Lifetime-heartbeat estimate

```text
Lifetime heartbeats =
heart rate × 60 × 24 × 365.25 × years
```

### Equivalent years

```text
Equivalent years =
total heartbeats ÷ heart rate ÷ 60 ÷ 24 ÷ 365.25
```

The formulas assume a constant heart rate solely for mathematical comparison.

Real mammalian heart rates vary with activity, sleep, age, temperature, stress, diving, torpor and many other physiological conditions.

Read the full scientific explanation:

https://clearhowguide.com/en/science/one-billion-heartbeats-mammals/

---

## ⚠️ Important limitation

This project does not predict lifespan.

It should not be used to:

- estimate how long a person will live;
- determine whether a personal heart rate is healthy;
- diagnose cardiovascular disease;
- make exercise decisions;
- make treatment decisions;
- change medication.

The results are mathematical estimates based on the inputs provided.

---

## 🧪 Reference calculations

The repository includes checks for several known calculations.

```text
70 bpm × 80 years
= 2,945,376,000 heartbeats
```

```text
30 bpm × 65 years
= 1,025,622,000 heartbeats
```

```text
1 billion heartbeats at 60 bpm
≈ 31.688 years
```

```text
2 billion heartbeats at 60 bpm
≈ 63.376 years
```

---

## 🛠 Technology

The public component uses:

- Astro;
- browser-native JavaScript;
- HTML;
- CSS;
- Intl.NumberFormat;
- URLSearchParams;
- Clipboard API where available;
- Web Share API where available.

No calculator backend is required.

---

## 📦 Installation

This repository is distributed as source code rather than as an npm package.

Copy:

```text
src/LifetimeHeartbeatsCalculator.astro
```

into your Astro project, for example:

```text
src/components/LifetimeHeartbeatsCalculator.astro
```

Then import it from an Astro or MDX page:

```jsx
import LifetimeHeartbeatsCalculator from '../components/LifetimeHeartbeatsCalculator.astro';
```

Render it:

```jsx
<LifetimeHeartbeatsCalculator />
```

For ClearHowGuide-style share links:

```jsx
<LifetimeHeartbeatsCalculator
  sharePath="/en/science/lifetime-heartbeats-calculator/"
/>
```

---

## ✅ Run checks

Clone the repository:

```bash
git clone https://github.com/clearhowguide/lifetime-heartbeats-calculator.git
cd lifetime-heartbeats-calculator
```

Install the repository metadata:

```bash
npm install
```

Run every check:

```bash
npm run check
```

Or run the checks individually:

```bash
npm run check:math
npm run check:privacy
```

---

## 🔍 Privacy check

The privacy check scans the published component for browser-storage,
network and analytics patterns that the calculator should not require.

Currently checked patterns include:

```text
fetch()
XMLHttpRequest
WebSocket
localStorage
sessionStorage
IndexedDB
document.cookie
navigator.sendBeacon
gtag()
umami.track()
```

Clipboard and Web Share functionality are intentionally allowed because
they only run when the user explicitly activates the corresponding controls.

---

## 📁 Repository structure

```text
lifetime-heartbeats-calculator/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   └── pull_request_template.md
├── examples/
│   └── basic-usage.mdx
├── scripts/
│   ├── check-math.mjs
│   └── privacy-check.mjs
├── src/
│   └── LifetimeHeartbeatsCalculator.astro
├── .gitignore
├── CHANGELOG.md
├── CITATION.cff
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── PRIVACY.md
├── README.md
├── SECURITY.md
├── SUPPORT.md
├── package-lock.json
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome.

Please read:

[CONTRIBUTING.md](CONTRIBUTING.md)

before opening a pull request.

---

## 🛡 Security

Please do not publish security vulnerabilities in public issues.

See:

[SECURITY.md](SECURITY.md)

---

## 🌱 Code of Conduct

Participation in this project is governed by:

[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

---

## 💬 Support

For usage questions and bug reports, see:

[SUPPORT.md](SUPPORT.md)

---

## 📚 Citation

If you use this calculator in educational, scientific or technical work,
citation information is available in:

[CITATION.cff](CITATION.cff)

GitHub can use this metadata to generate citation formats for the project.

---

## 🗺 Roadmap

Possible future improvements include:

- official embeddable iframe version;
- additional comparison presets;
- optional visualization modes;
- additional educational examples;
- downloadable calculation summaries.

---

## 📄 License

MIT License.

See:

[LICENSE](LICENSE)

---

## 🌐 Used by

This calculator is used by ClearHowGuide:

https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/

Related science explainer:

https://clearhowguide.com/en/science/one-billion-heartbeats-mammals/
