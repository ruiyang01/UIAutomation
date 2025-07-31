// metrics.ts
import { Gauge, Pushgateway } from 'prom-client';

// Define custom metrics (registered to default global registry)
const durationGauge = new Gauge({
  name: 'playwright_test_duration_seconds',
  help: 'Duration of the Playwright test run in seconds',
});

const failureGauge = new Gauge({
  name: 'playwright_test_failures_total',
  help: 'Total number of failed Playwright tests',
});

/**
 * Pushes Playwright test metrics to Prometheus Pushgateway.
 * @param params - Object containing test duration and failure count
 */
export async function pushPlaywrightMetrics(params: {
  durationSeconds: number;
  failureCount: number;
  jobName?: string;
  labels?: Record<string, string>;
}) {
  const { durationSeconds, failureCount, jobName = 'playwright_tests', labels = {} } = params;

  // Set metric values
  durationGauge.set(durationSeconds);
  failureGauge.set(failureCount);

  // Create Pushgateway instance
  const gateway = new Pushgateway('http://localhost:9095');

  // Push to Pushgateway using the default registry (internally managed)
  await gateway.pushAdd({
    jobName,
    groupings: labels,
  });

  console.log(`✅ Metrics pushed to Pushgateway: job="${jobName}"`);
}
