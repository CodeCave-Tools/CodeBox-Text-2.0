const { app, BrowserWindow } = require('electron')
const test1414 = require('./menu.js')

function createWindow () {
  const win = new BrowserWindow({
    width: 900,
    height: 800,

    minHeight: 650,
    minWidth: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

