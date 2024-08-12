import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Npm = () => {
    const [terminalLines, setTerminalLines] = useState([
        <TerminalOutput key={0}>$ npm commands demo</TerminalOutput>,
        <TerminalOutput key={1}>Type a command to get info:</TerminalOutput>,
        <TerminalOutput key={2}>npm audit</TerminalOutput>,
        <TerminalOutput key={3}>npm outdated</TerminalOutput>,
        <TerminalOutput key={4}>npm update</TerminalOutput>,
        <TerminalOutput key={5}>npm doctor</TerminalOutput>,
        <TerminalOutput key={6}>npm ci</TerminalOutput>,
        <TerminalOutput key={7}>npm profile enable-2fa auth-and-writes</TerminalOutput>
    ]);

    const handleInput = (input) => {
        let output;
        switch (input) {
            case 'npm audit':
                output = `
      Running \`npm audit\` checks for vulnerabilities in your project dependencies.
      It provides a detailed report of the security issues found, their severity,
      and possible remediation steps.
      Usage: \`npm audit\`

      Running \`npm audit fix\` attempts to automatically fix vulnerabilities by
      updating dependencies to safe versions. It modifies your \`package-lock.json\`
      and \`node_modules\` to install the fixed versions.
      Usage: \`npm audit fix\`
            `;
                break;
            case 'npm outdated':
                output = `
      Running \`npm outdated\` lists all the dependencies that are outdated.
      It shows the current version, the version wanted based on the semantic versioning
      range in your \`package.json\`, and the latest version available.
      Usage: \`npm outdated\`
            `;
                break;
            case 'npm update':
                output = `
      Running \`npm update\` updates all the packages to the latest version according
      to the specified version range in your \`package.json\`.
      It modifies your \`package-lock.json\` and \`node_modules\`.
      Usage: \`npm update\`
            `;
                break;
            case 'npm doctor':
                output = `
      Running \`npm doctor\` performs a series of checks to ensure your npm environment
      is configured correctly. It checks your npm configuration, the state of your
      dependencies, and your system's environment to diagnose potential issues.
      Usage: \`npm doctor\`
            `;
                break;
            case 'npm ci':
                output = `
      Running \`npm ci\` installs dependencies based on the package-lock.json file
      to provide faster and more reliable builds in CI (Continuous Integration) environments.
      Usage: \`npm ci\`
            `;
                break;
            case 'npm profile enable-2fa auth-and-writes':
                output = `
      Running \`npm profile enable-2fa auth-and-writes\` enables two-factor authentication (2FA)
      for both authentication and package publication (writes) on your npm account.
      Usage: \`npm profile enable-2fa auth-and-writes\`
            `;
                break;
            default:
                output = `Unknown command: ${input}`;
        }
        setTerminalLines([
            ...terminalLines,
            <TerminalOutput key={terminalLines.length}>{`> ${input}`}</TerminalOutput>,
            <TerminalOutput key={terminalLines.length + 1}>{output}</TerminalOutput>
        ]);
    };

    const CustomToast = ({ message, link }) => (
        <div>
            <p>{message} <a href={link} target="_blank">npm cheatSheet</a>.. 👏</p>
        </div>
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>npm commands</h1>
            <Terminal
                name="cmd"
                colorMode={ColorMode.Dark}
                onInput={handleInput}
                redBtnCallback={() => toast.error("You can check-out any time you like, but youuuuu can never leave! 😗🎶")}
                yellowBtnCallback={() => toast.warn(<CustomToast message="Hey! You! Look at this"
                    link="https://media.jfrog.com/wp-content/uploads/2021/08/23165237/JFrog_NPM_CheatSheet_V4.pdf" />)}
                greenBtnCallback={() => toast.info("Let us leave the window size alone, shall we 😏")}
            >
                {terminalLines}
            </Terminal>
            <ToastContainer />
        </div>
    );
};

export default Npm;
