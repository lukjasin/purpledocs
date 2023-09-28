---
sidebar_position: 1
title: Dashboard
---

# Dashboard

The Dashboard screen consists of two parts. On the left there is a list of currently active/working installers, and on the right there is a map with the marked positions of installers and installations along with the geofencing area.

The installer position is updated from time to time. This happens when activity and status changes and, depending on the system: 
- for Android - every 5 minutes,
- for iOS every 50m of his movement.

Sample view of the Dashboard screen

![Dashboard screen](./img/dashboard_2.png)


## The list
![Dashboard list](./img/dashboard_list.png)

The list on the left contains information about working installers. The individual columns contain details about:
**Username** - installer login in the system.<br />
**Phone** - installer's phone number (not required in installers details).<br />
**Installation** - the installation place in which the installer is currently working.<br />
**Start date** - date and time of starting work in a given installation.<br />
**Work status** - current status and its duration (working, pause).<br />

Data can be sorted by each column.

## The map
![Dashboard map](./img/dashboard_map.png)

After selecting an installer from this list, the map on the right will focus on that user. Its last recorded position, GPS track and the area around the installation in which geofencing is active will be marked (while in this area, the installer can start work).

## Map bottom panel
![Dashboard chart](./img/dashboard_chart.png)

In addition, a panel with details of the installer's presence in a given installation will appear under the map. 

There is a name of selected user and current installation which is a link to the installation page details.

The red Finish work button allows the user to force end installers work, e.g. if the installer forgot to do it in the mobile application.


The chart shows the presence of the installer in the location from the moment he started working there. The upper bar shows the presence in the geofencing area, the lower one shows the duration of a given status.

Top color bar:
- green - the installer was in the address
- red - installer outside the address

Bottom color bar:
- blue - work
- yellow - pause

There is a zoom bar below the chart. Operating the bar can increase the detail of the chart and enable more precise determination of short activities in a workday usually lasting several hours. This is done by defining the period that will be displayed on the chart. Moving the left side of the bar determines the time from which the chart should start, and the right side is responsible for the end of the chart. Additionally, adjusted bar can be moved throughout the entire range of recorded working time.
