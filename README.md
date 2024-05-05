# Move All Windows to Next Screen

This KWin script provides user definable shortcut that let you move each window to the next screen they were. If you want to quickly move all windows from one screen to another this is for you.

Adapted from wd5gnr Qt6 update from richrd's "moveallwindowstoscreen"

## Motive

I like to work with two screens, I created this script to I could swap the content of each screen to another one. I've only tested with 2 screens with the same resolution, but this should work as a "circle through screens".


## Installation

First clone this repo and run the following command in the root directory of the repo (note that KWin has two capital letters and, yes, it matters).

	kpackagetool6 --type KWin/Script -i .

After that open KWin Scripts (System Settings → Window Management → KWin Scripts) and enable "Move All Windows to Next Screen". This won't yet enable any shortcuts, you can define your own key bindings. See Setup for details.

If you need to update the script to a new version pull the repo again and run:

	kpackagetool6 --type KWin/Script -r moveallwindowstonextscreen
	kpackagetool6 --type KWin/Script -i .

## Setup

Open System Settings and go to Shortcuts → Global Shortcuts → Kwin. You should see the new shortcut available there. Just add the shortcut for this script and that's it.
