# TI4 Generator
A web tool to generate Twilight Imperium 4 game boards through many custom settings.

The generation link: [8 Player 3D Only](https://brokenrafterfarms.github.io/ti4/)

## Details:

This fork is based on a generation script built by [KeeganW](https://github.com/KeeganW/ti4)

It has been customized to allow for a 3d board like the one below:
![IMG_1354](https://github.com/user-attachments/assets/a6c81882-d15f-493f-aa07-7d0bfa8724a3)


Building on top of what Keegan has already done the following image shows how the tiles are layed out and how I changed the layout.
<img width="1124" alt="Screenshot 2025-02-28 at 8 53 11 PM" src="https://github.com/user-attachments/assets/f48e022b-167b-4166-a147-d32889ff0f61" />


The adjacencyData.json was updated to make sure the tiles where correctly related to each other for calculation purposes.
* Top Layer: Tile 19 in the middle
* Middle Layer: Tile 0 in the middle
* Lower Layer: Tile 38 in the middle
* Wormhole Planets (leftover pieces)

To achieve this the 8 player setup in boardData.json has been updated with new home world locations and primary and secondary planets.
Helpers.js was also updated to the html put the planets in the correct spot for the 3d map.


I did not spend to much time trying to balance everything cause we just used this a starting point then customized it from there.


Side note: Also created a github action to auto publish the build when pushed to main.

## Web Quick Start

The Link: [8 Player 3D](https://brokenrafterfarms.github.io/ti4/)


For the normal version:
Visit the [web page located on github pages](https://keeganw.github.io/ti4/). This is running from the `gh-pages` branch.

## Development Setup

1. Install Node and NPM for your OS using [their website](https://nodejs.org/en/) or brew on Mac (`brew install node`)
1. In the root directory of the cloned project, run `npm install`
1. Once it is done, you can start the development server with `npm start`. If a web page is not automatically opened, go to [localhost:3000/ti4](http://localhost:3000/ti4)

## Using the Tool

The tool has many features, go poke around! Here is a list of notable features:

- Automatic map generation based on user input. Options include:
    - Using new Prophecy of Kings content
    - Setting the player count
    - Setting what the board will look like from various custom maps
    - Setting how tiles are places by working with their weights
    - Seeding the generation with a custom number between 1-10,000
    - Automatically picking races for players
    - Set player names for showing on the map
    - Set races that can be picked from
    - Randomization of how tiles are placed
    - Moving better planets towards the middle
- Drag and drop tiles to customize your board
- Zoom in and out to get a better idea of what certain tiles are
- Show an overlay with the tile numbers for when you are ready to build your board
- Replace any tiles on the board with any unused tiles
- Show detailed information about the adjacenct planets to each home system
- Sharable links to send to your friends
- Copy the tile string to view in Table Top Simulator (TTS)

## Pushing Changes to Github Pages

```bash
npm run deploy
```

Using react's `gh-pages` you can simply run the above command to deploy to the github page.
