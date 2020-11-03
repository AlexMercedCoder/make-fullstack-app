#!/usr/bin/env node

const spawn = require("./prospawn");
const { backend, frontend } = require("./templates");
const chalk = require("chalk");

//Extract Arguments
const [, , btemp, ftemp] = process.argv;

//Extra Template URLS
const b = backend[btemp] ? backend[btemp] : backend["express"];
const f = frontend[ftemp] ? frontend[ftemp] : frontend["basicreact"];

spawn(`npx degit ${b} backend && npx degit ${f} frontend`).then(() => {
  console.log(chalk.bgCyan.black(`PROJECT SCAFFOLD COMPLETE`));
  console.log(
    chalk.bgMagenta.white(
      `MAKE SURE TO RUN "NPM INSTALL" IN BOTH THE BACKEND AND FRONTEND FOLDER`
    )
  );
  console.log(
    chalk.blue.white(
      `Follow me @AlexMercedCoder on twitter/instagram and join the Discord & Slack communities at devNursery.com to learn about great materials and tools.`
    )
  );
});
