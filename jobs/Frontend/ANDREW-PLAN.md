# Plan of Action

## Setup

1. Typescript with React and Next
1. react-redux / @reduxjs/toolkit
1. Styled with styled-components

## Get Data into the redux store

## Two views

### "Search" View

- paginated list of movies returned from the API
- way to load an additional batch i.e. if there are more pages but we've only returned x pages.
- Clicking on a movie gets you to the "movie detail" view where detailed information about the movie should be listed.

### Individual "Movie Detail" view

- show further details about the movie
- link back to the homepage

## Search box

- a component that will trigger the searching within the API when you have stopped typing (no submit button). useDebouncedCallback ?

# Tasks

- [x] setup i.e. install dependencies
- [ ] set up moviesSlice in redux
- [ ] Search Box
