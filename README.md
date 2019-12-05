# Simple Vue-Worker Demo

This is a simple Vue.js 2 project created with Vue CLI 4 and Yarn which aims to demonstrate the usage of Promises with Async-Await and Web-Workers.

The app pretends to fetch some data over some API, then processes/transforms the data such that it can be consumed by a data-visualisation or charting library (such as D3, C3, Cytoscape etc). In between every operation it also updates the component state to indicate to the user, what operation is being performed.

The data-preparation bit is supposed to be a long-running, synchronous operation which should ideally be done off of the main thread, hence the web-workers.  

Other than learning and demonstration that this project has no other purpose, so it is likely not to be updated, like ever.  

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
