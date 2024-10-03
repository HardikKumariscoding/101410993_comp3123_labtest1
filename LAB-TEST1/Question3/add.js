const fs = require('fs').promises;
const path = require('path');

const currentDir = process.cwd();
const logsDir = path.join(currentDir, 'Logs');

const createLogFiles = async () => {
    try {
        await fs.mkdir(logsDir, { recursive: true });
        console.log('Logs directory created.');
        const logFilePromises = Array.from({ length: 10 }, async (_, i) => {
            const fileName = `log${i + 1}.txt`;
            await fs.writeFile(path.join(logsDir, fileName), `This is log file number ${i + 1}.`, 'utf8');
            console.log(`Created: ${fileName}`);
        });
        await Promise.all(logFilePromises);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};
createLogFiles();
