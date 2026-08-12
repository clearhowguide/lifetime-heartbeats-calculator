const MINUTES_PER_YEAR = 60 * 24 * 365.25;

function lifetimeHeartbeats(bpm, years) {
  return bpm * MINUTES_PER_YEAR * years;
}

function equivalentYears(beats, bpm) {
  return beats / (bpm * MINUTES_PER_YEAR);
}

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label}`);
    console.error(`Expected: ${expected}`);
    console.error(`Received: ${actual}`);
    process.exit(1);
  }

  console.log(`PASS: ${label}`);
}

function assertClose(actual, expected, tolerance, label) {
  if (Math.abs(actual - expected) > tolerance) {
    console.error(`FAIL: ${label}`);
    console.error(`Expected approximately: ${expected}`);
    console.error(`Received: ${actual}`);
    process.exit(1);
  }

  console.log(`PASS: ${label}`);
}

assertEqual(
  lifetimeHeartbeats(70, 80),
  2945376000,
  '70 bpm × 80 years = 2,945,376,000 beats'
);

assertEqual(
  lifetimeHeartbeats(30, 65),
  1025622000,
  '30 bpm × 65 years = 1,025,622,000 beats'
);

assertClose(
  equivalentYears(1000000000, 60),
  31.688087814,
  0.000001,
  '1 billion beats at 60 bpm ≈ 31.688 years'
);

assertClose(
  equivalentYears(2000000000, 60),
  63.376175628,
  0.000001,
  '2 billion beats at 60 bpm ≈ 63.376 years'
);

console.log('');
console.log('All mathematical checks passed.');
