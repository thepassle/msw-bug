import { mockPlugin } from "@web/mocks/plugins.js";

// @see https://modern-web.dev/docs/test-runner/cli-and-configuration/#configuration-file
export default {
  nodeResolve: true,
  files: ["test.js"],
  plugins: [mockPlugin()],
};
