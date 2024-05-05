function isRelevant(client) {
    return !client.specialWindow;
}

function findScreenIndex(scr) {
    print("scr" ,scr.name);
    for (var index = 0; index < workspace.screens.length; ++index) {
        print("index" ,index);
        print("workspace.screens[index] == scr" ,workspace.screens[index] == scr);
        if(workspace.screens[index] == scr) {
            return index;
        }
    }
    return 0;
}

function moveAllWindowsToNextScreen() {
    var allScreenClients = workspace.windowList();
    var screenClients = allScreenClients.filter(function(client) {
        return isRelevant(client);
    });
    print(screenClients);
    var lastScreenIndex = workspace.screens.length-1;
    print(lastScreenIndex);
    for (var i = 0; i < screenClients.length; ++i) {
        var clientPos = screenClients[i].pos;
        print("i", i, "client", screenClients[i].caption, "clientPos" ,clientPos);
        var currScreen = workspace.screenAt(clientPos);
        print("i", i, );
        var screenIndex = findScreenIndex(currScreen);
        print("i", i, "screenIndex" ,screenIndex, "currScreen" ,currScreen.name);
        screenIndex++;
        if(screenIndex > lastScreenIndex)
            screenIndex = 0;
        print("i", i, "screenIndex" ,screenIndex);
        workspace.sendClientToScreen(screenClients[i], workspace.screens[screenIndex]);
    }
}

registerShortcut("Move All Windows To Next Screen", "Move All Windows To Next Screen", "", moveAllWindowsToNextScreen);

