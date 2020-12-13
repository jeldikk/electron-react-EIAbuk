import { app, BrowserWindow } from "electron";
import {enableLiveReload} from 'electron-compile'

enableLiveReload();

let mainWindow = null;

app.whenReady().then(()=>{
    mainWindow = new BrowserWindow({
        height: 600,
        width: 300,
        minWidth: 300,
        webPreferences:{
            devTools: true,
            nodeIntegration: true
        },
        show: false
    })

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.once('ready-to-show',()=>{
        console.log(mainWindow.webContents);
        mainWindow.webContents.openDevTools();
        mainWindow.show();
    })


})

