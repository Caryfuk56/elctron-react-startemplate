const {electron, app, BrowserWindow} = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');

require('electron-reload')(__dirname);

let mainWin;

function createMainWindow() {
    mainWin = new BrowserWindow({
        width: 1024, height: 700,
        nodeIntegration: true
    });

    mainWin.loadFile(path.resolve(__dirname, "index.html"));

    if(isDev) mainWin.webContents.openDevTools();

    mainWin.on('closed', () => {
        mainWin = null;
    });
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
    if(process !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(mainWin === null) {
        createMainWindow();
    }
});