# 🤝 Contributing to Lifetime Heartbeats Calculator

Thank you for your interest in contributing.

This project is intentionally small, educational and easy to audit.

---

## ✅ What we welcome

We welcome contributions that improve:

- calculation reliability;
- accessibility;
- responsive behavior;
- documentation;
- browser compatibility;
- privacy;
- input validation;
- educational clarity;
- code maintainability.

---

## ❌ What we do not want

Please avoid changes that:

- transmit calculator inputs without a clear need;
- store calculator inputs by default;
- add unnecessary dependencies;
- turn the calculator into a medical diagnostic tool;
- claim to predict lifespan;
- introduce misleading scientific claims;
- add invasive analytics;
- weaken accessibility.

---

## 🎯 Project principles

### 1. Educational, not medical

The calculator demonstrates arithmetic and scientific concepts.

It does not predict lifespan or diagnose health conditions.

### 2. Local by default

Calculator arithmetic should remain browser-side whenever possible.

### 3. Minimal dependencies

Prefer browser-native functionality.

### 4. Accessible

Keyboard navigation and clear labels should remain first-class requirements.

### 5. Transparent

Formulas, limitations and assumptions should remain visible to users.

---

## 🛠 Local setup

Clone:

```bash
git clone https://github.com/clearhowguide/lifetime-heartbeats-calculator.git
cd lifetime-heartbeats-calculator
```

Install:

```bash
npm install
```

Run checks:

```bash
npm run check
```

---

## 🔍 Before opening a pull request

Please run:

```bash
npm run check:math
npm run check:privacy
```

Both must pass.

---

## 🌱 How to contribute

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the checks.
5. Commit your changes.
6. Push your branch.
7. Open a pull request.

Example:

```bash
git checkout -b improve-accessibility
npm run check
git add .
git commit -m "fix: improve calculator accessibility"
git push origin improve-accessibility
```

---

## 🧾 Pull request checklist

Before submitting:

- [ ] Mathematical checks pass.
- [ ] Privacy check passes.
- [ ] No unnecessary network request was added.
- [ ] No browser storage was added without justification.
- [ ] No medical or lifespan prediction claim was added.
- [ ] Mobile behavior was considered.
- [ ] Keyboard accessibility was considered.
- [ ] Documentation was updated where necessary.

---

## 🐛 Bug reports

Please describe:

- what happened;
- what you expected;
- steps to reproduce;
- browser and operating system;
- screenshots if useful.

Do not include sensitive personal information.

---

## 🛡 Security issues

Do not report vulnerabilities through public issues.

Read:

[SECURITY.md](SECURITY.md)

---

## 💬 Communication style

Please be kind, precise and constructive.

Clear reports, small pull requests and respectful feedback are appreciated.
