# Getting Started with Create React App

This repo contains the finished code for the Introduction to JS Libraries with ReactJS presentation.

Order of items shown in the presentation:

### 1. Bootstrap repo

- Create the app by running `npx create-react-app my-app`
- Open folder in Visual Studio Code
- Go over each file/directory and explain what it does
- Move items to devDependencies
- Re-run `npm install`
- Run `npm start`
- ~~Add `var foo = 'bar'` to `src/App.js` to show linting errors~~

### 2. Modify App.js

- Add `<main>`
- Create `headerText` const and display

### 3. Add simple Dino.jsx

- Create `<Dinos />` component - NO export - Static content
- Add `<Dinos />` to `App.js`
- Add export to `<Dinos />`
- ~~Add `headerText` in `<Dinos />` - No conflict~~
- Comment out header (This will cause tests to fail later)
- Add `dinoList` and use `map` to display `li`

### 4. Adding dinos to state and sort

- Move `dinoList` to state
- Add `Sort` button
- ~~Add `sortAscending` to state and modify onClick~~

### 5. Add dino details

- Add `<DinoListItem>` component and set 'name' and 'type' props
- Add `<DinoListItem>` to `<DinoList>`
- Add `leaf.svg` to project
- Add if for herbivore - so image if herbivore
- ~~Add style to `leaf img`~~

### 6. Make ajax call (and bootstrap)

- Add `axios` to project and run `npm i`
- Add `useEffect` to load dinos from API
- ~~Add `bootstrap` and `react-bootstrap`~~ - Show website
- ~~Run `npm i`~~
- ~~Add `loading` to state~~
- ~~Add `<Spinner />` component~~

### 7. Running tests

- Run `npm run test`
- Look at `App.test.js`
- Add `DinoListItem.test.jsx`
- ~~Add coverage by adding `--coverage` to test script in package.json~~

### 8. Build

- Run `npm run build`
- Show `build` directory

Be prepared to add/show the following:

- react-router
- styled-components
- configure eslint
- add jest coverage
