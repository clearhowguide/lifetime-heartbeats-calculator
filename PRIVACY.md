# Privacy

Lifetime Heartbeats Calculator is designed to perform calculator operations locally in the user's browser.

## Calculator data

The calculator component itself does not require calculator inputs to be:

- sent to ClearHowGuide;
- sent to PocketBase;
- sent to an external API;
- saved in a database;
- written to localStorage;
- written to sessionStorage;
- written to IndexedDB;
- stored in cookies;
- sent to an analytics provider.

Calculations are performed locally with browser-side JavaScript.

## Share links

When a user explicitly chooses to share a calculation, calculator values may be represented in URL query parameters.

Example:

    ?mode=estimate&bpm=70&years=80

Another example:

    ?mode=convert&beats=1000000000&bpm=60

Anyone receiving such a URL can see the calculator values contained in that URL.

Users should therefore not place sensitive or personal information in calculator URLs.

## Clipboard

The Copy Result feature can use the browser Clipboard API after an explicit user action.

The calculator does not copy data automatically.

## Web Share

The Share Calculation feature can use the browser Web Share API after an explicit user action when the browser supports it.

If the Web Share API is unavailable, the calculator may offer a clipboard-based fallback for the share URL.

## Browser storage

The calculator component does not require:

- localStorage;
- sessionStorage;
- IndexedDB;
- cookies

to store calculator inputs or results.

## Network requests

The calculator's arithmetic does not require calculator values to be transmitted to an API or calculation server.

The calculations are performed in the browser.

## Hosting environments

This repository describes the Lifetime Heartbeats Calculator component itself.

A website embedding this component may separately use:

- analytics;
- server logs;
- cookies;
- CDN services;
- security services;
- other third-party technologies.

Those systems are outside the calculator component and are governed by the privacy policy of the website where the component is deployed.

## Official ClearHowGuide version

The official calculator is available at:

https://clearhowguide.com/en/science/lifetime-heartbeats-calculator/

The related scientific explainer is available at:

https://clearhowguide.com/en/science/one-billion-heartbeats-mammals/

## Important note

Lifetime Heartbeats Calculator is an educational mathematical tool.

It is not designed to collect health information, provide medical advice, diagnose a condition, or predict an individual's lifespan.

## Privacy principle

The calculator is designed around a simple principle:

**Calculate locally whenever possible and avoid collecting calculator input data unnecessarily.**
