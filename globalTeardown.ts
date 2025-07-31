import fs from 'fs';
import path from 'path';
import { pushPlaywrightMetrics } from './metrics';

export default async () => {
  const resultsPath = path.resolve(__dirname, 'playwright-report', 'test-results.json');

  let failureCount = 0;
  let startTime = 0;
  let endTime = Date.now();

  if (fs.existsSync(resultsPath)) {
    const report = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    console.log("report", report.stats.startTime);
    failureCount = report.suites?.flatMap((s: any) => s.specs).filter((s: any) => s.ok === false).length ?? 0;
    startTime = new Date(report.stats.startTime).getTime();
    endTime = new Date(report.stats.endTime ?? Date.now()).getTime();
  }

  const durationSeconds = (endTime - startTime) / 1000;
  console.log('durationSeconds', durationSeconds)
  console.log('failureCount', failureCount)
  await pushPlaywrightMetrics({
    durationSeconds,
    failureCount,
    labels: {
      env: process.env.ENV || 'dev',
      branch: process.env.BRANCH || 'local',
    },
  });
};
