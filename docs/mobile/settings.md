---
sidebar_position: 3
title: Settings
---

# Location settings

The app requires constant access to location services on both, Android and iOS, to work correctly also in the background and when the device is locked (sleep mode).

##  Access to location services

After starting the PurpleApp and logging in to the system, info will appear about granting appropriate access rights for the app to access the device's location services.

Access rights must be set to **Always Allowed**.

Device location is recorded only when work time registration is turned on. When the application is running, the user is logged in, but the work is not started in the app, only whether the device is in the area of ​​assigned installations is checked, and this data is not recorded.

## Location tracking

Granting access to location services at all times does not mean that this data is checked and collected at all times and that the user is tracked at all times.

### Stand by mode
`Just checking if you are at installation place, no data kept.`

The app starts checking the device's current location when you launch it. The purpose of this is to correctly indicate whether the installer is already at the location of the assigned and planned installations or to determine the distance to them. At this stage, the location is only checked and the data is not saved and kept.

### Working mode
`Registering location only from start till end work.`

Once the installer is in the designated area, he can start working there. This is marked in the mobile application and the device's location begins to be saved even when the device's screen turns off. After you finish working in the mobile application, recording the device's location is stopped. The application goes from working mode to waiting mode.