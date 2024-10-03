const fs = require('fs').promises;
const path = require('path');

const currentDir = process.cwd();
const logsDir = path.join(currentDir, 'Logs');

const removeLogFiles = async () => {
    try {
        const files = await fs.readdir(logsDir);
        
        await Promise.all(files.map(async (file) => {
            console.log(`Deleting: ${file}`);
            await fs.unlink(path.join(logsDir, file));
        }));
        await fs.rmdir(logsDir);
        console.log('Logs directory has been removed.');
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log('Logs directory does not exist.');
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

removeLogFiles();
