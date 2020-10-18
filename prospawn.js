const { spawn } = require("child_process");

const spawnPromise = (cmd) => {
  return new Promise((next, fail) => {
    const bat = spawn(cmd, { shell: true });

    bat.stdout.on("data", (data) => {
      console.log(data.toString());
    });

    bat.stderr.on("error", (data) => {
      fail(data);
    });

    bat.on("exit", (code) => {
      console.log(`Child exited with code ${code}`);
      next(code);
    });
  });
};

module.exports = spawnPromise;
