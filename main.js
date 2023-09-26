const { app, Tray, Menu } = require('electron');
const path = require('path');

let tray;
// create menu template
const mainContextMenuTemplate = [
    {
        label: 'Some label 1',
        type: 'normal',
        click() {
            console.log('some text');
        }
    },
    {
        label: 'Quit',
        type: 'normal',
        role: 'quit'
    },
]

function createTray() {
    // load tray icon
    const trayIconPath = path.join(__dirname, './assets/images/tray-image.png');
    tray = new Tray(trayIconPath);
    tray.setToolTip("Some tooltip");
    const contextMenu = Menu.buildFromTemplate(mainContextMenuTemplate);
    tray.setContextMenu(contextMenu);
}

app.on('ready', function () {
    console.log(process.versions.electron);
    createTray();
});

app.on('window-all-closed', () => {
});

app.on('before-quit', function () {
    tray.destroy();
});



