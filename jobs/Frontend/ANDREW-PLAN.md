# Plan of Action

## Setup

1. Typescript with React and Next
1. react-redux / @reduxjs/toolkit
1. Styled with styled-components

## Get Data into the redux store

## Two views

### "Search" View

- [x] list of movies returned from the API
- [x] way to load an additional batch i.e. if there are more pages but we've only returned x pages.
- [x] Clicking on a movie gets you to the "movie detail" view where detailed information about the movie should be listed.
- [x] pagination
- [ ] add more content and style
- [ ] Loading State
- [ ] Error State

### Individual "Movie Detail" view

- [x] show further details about the movie
- [x] link back to the homepage
- [ ] add more content and style

## Search box

- [x] a component that will trigger the searching within the API
- [x] triggered when you have stopped typing (no submit button). useDebouncedCallback ?

# Tasks

- [x] setup i.e. install dependencies
- [x] set up moviesSlice in redux
- [x] Search Box

## Extras

- [ ] Component testing
- [ ] responsive styles
- [ ] is Next really necessary? i.e. could react-router be used?
