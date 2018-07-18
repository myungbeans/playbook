# PLAYBOOK

![Playbook Opening Sequnece](http://www.giphy.com/gifs/2gVZiyyHbTsy6XLSh6)

A virtual playbook for coaches, drill directors, and dancers to map and visualize synchronized movement in action. Users can log-in to create or view all of their saved plays, drag and drop to edit player's positions, set travel paths/routes for each player, and hit play to see all of the players move along their routes.

Built on a React-Redux front end and Ruby on Rails back end. Playbook uses JSON Web Tokens to verify authorization and BCrypt to protect user passwords.

## Getting Started

Back end repository can be found [here](http://www.github.com).

To run on a local server:

```
PORT=4000 yarn start
```

## Built With

* [React-Redux](http://www.dropwizard.io/1.0.2/docs/) - Web framework used to centralize state management
* [AnimeJS](https://maven.apache.org/) - Lightweight animation library implemented to enable animations in opening page and player movement
* [Draggable](https://rometools.github.io/rome/) - Used to enable drag and drop functionality

## Acknowledgments

* Assets created by Zaff Studio from the Noun Project
* Opening Logo font design by Ann Kim
* Custom player icons by Brie Sáez