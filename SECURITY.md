# Security Policy

Thank you for helping keep Lifetime Heartbeats Calculator and its users safe.

This project is an educational, privacy-conscious calculator maintained by ClearHowGuide.

## Supported versions

| Version | Supported |
|---|---|
| Latest `main` branch | Yes |
| Latest published release | Yes |
| Older copied versions | No |

Only the current source in this repository and the latest official ClearHowGuide deployment are actively maintained.

## Responsible disclosure

If you believe you have found a security or privacy issue, please do not publish sensitive details in a public GitHub issue.

Examples of issues that should be reported privately include:

- unexpected transmission of calculator values;
- unintended storage of calculator values;
- cross-site scripting risks;
- unsafe handling of URL parameters;
- malicious or unsafe dependency behavior;
- unexpected browser-storage behavior;
- misleading privacy behavior;
- vulnerabilities that could affect users of the component;
- vulnerabilities affecting the official ClearHowGuide implementation.

## How to report a vulnerability

Please use GitHub Private Vulnerability Reporting when it is available for this repository.

If private vulnerability reporting is unavailable, contact ClearHowGuide through the official contact page:

https://clearhowguide.com/en/contact/

Please do not include sensitive information in a public issue.

## What to include

A useful vulnerability report should include:

- a clear description of the issue;
- steps to reproduce it;
- the affected file or component, if known;
- browser and operating system, when relevant;
- a safe proof of concept, if appropriate;
- expected behavior;
- actual behavior;
- potential security or privacy impact.

Please do not include unrelated personal information, medical information, credentials, tokens, passwords, API keys, or other secrets.

## Security design goals

Lifetime Heartbeats Calculator is intentionally designed to remain simple and auditable.

The calculator should:

- perform mathematical calculations locally in the browser;
- avoid unnecessary server requests;
- avoid transmitting calculator inputs to ClearHowGuide;
- avoid transmitting calculator inputs to PocketBase;
- avoid storing calculator inputs in a database;
- avoid storing calculator inputs in localStorage;
- avoid storing calculator inputs in sessionStorage;
- avoid storing calculator inputs in IndexedDB;
- avoid storing calculator inputs in cookies;
- validate numerical inputs;
- handle URL query parameters defensively;
- avoid unsafe HTML injection;
- avoid unnecessary third-party dependencies;
- use browser-native APIs only when appropriate;
- clearly distinguish mathematical estimates from medical advice.

## Calculator input privacy

The calculator accepts values such as:

- heart rate;
- lifespan;
- total heartbeats.

These values are used only for mathematical calculations by the component.

The calculator itself does not require those values to be sent to a calculation server.

## Shareable URLs

The calculator can create shareable URLs containing calculator values as query parameters.

For example:

    ?mode=estimate&bpm=70&years=80

or:

    ?mode=convert&beats=1000000000&bpm=60

Values contained in a shared URL are visible to anyone who receives that URL.

Users should therefore not place sensitive or personal information in shareable calculator URLs.

## Clipboard and Web Share APIs

The calculator may use the Clipboard API when the user explicitly selects the Copy Result function.

The calculator may use the Web Share API when the user explicitly selects the Share Calculation function and the browser supports it.

These actions must remain user initiated.

## Dependency policy

The project should prefer:

- browser-native APIs;
- minimal dependencies;
- transparent source code;
- dependencies with a clear maintenance and security history.

Unnecessary dependencies should not be introduced.

## Privacy regression checks

The repository includes a privacy check intended to detect accidental introduction of functionality such as:

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

Before submitting changes, contributors should run:

    npm run check:privacy

The complete project checks can be run with:

    npm run check

## Mathematical integrity

Changes affecting calculator formulas should also run the mathematical regression checks:

    npm run check:math

Calculator results must remain consistent with the documented formulas.

## Medical and safety limitations

Lifetime Heartbeats Calculator is an educational mathematical tool.

It must not be represented as:

- a medical diagnostic tool;
- a cardiovascular health assessment;
- a lifespan prediction system;
- a recommendation to change medication;
- a recommendation to change medical treatment;
- a replacement for professional medical advice.

A mathematical relationship between heart rate, time, and total heartbeats does not predict an individual's lifespan.

## What not to do

Please do not:

- publish exploitable vulnerability details before responsible disclosure;
- submit real credentials, passwords, tokens, or API keys;
- attempt unauthorized access to ClearHowGuide infrastructure;
- perform destructive testing against the production website;
- introduce hidden tracking of calculator inputs;
- introduce unnecessary transmission of calculator inputs;
- misrepresent the calculator as medical advice;
- intentionally bypass privacy safeguards.

## Official project

Official calculator:

https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/

Scientific explainer:

https://clearhowguide.com/en/science/one-billion-heartbeats-mammals/

Source repository:

https://github.com/clearhowguide/lifetime-heartbeats-calculator

## Expected response

Security reports will be reviewed as reasonably possible for this small open-source project.

Confirmed issues may be fixed in the main branch and included in a subsequent release.

Please allow maintainers reasonable time to investigate and correct a vulnerability before public disclosure.

## Thank you

Responsible security research and constructive vulnerability reports are appreciated.

Our goal is to keep Lifetime Heartbeats Calculator transparent, educational, privacy-conscious, and safe to use.
