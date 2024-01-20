import { puppeteerLauncher } from "@web/test-runner-puppeteer";
import { mockPlugin } from "@web/mocks/plugins.js";

// @see https://modern-web.dev/docs/test-runner/cli-and-configuration/#configuration-file
export default {
  nodeResolve: {
    exportConditions: ["development"],
  },
  files: ["test.js"],
  browsers: [puppeteerLauncher({ launchOptions: { headless: "new" } })],
  plugins: [mockPlugin()],
  testFramework: {
    config: {
      timeout: 2000,
    },
  },
};
