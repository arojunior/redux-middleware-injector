# Redux Middleware Injector

[![npm version](https://img.shields.io/npm/v/redux-middleware-injector.svg)](https://www.npmjs.com/package/redux-middleware-injector) [![npm downloads](https://img.shields.io/npm/dm/redux-middleware-injector.svg)](https://www.npmjs.com/package/redux-middleware-injector) [![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

The recomended place to execute actions with side-effects in Redux is in the Middlewares.
With this lib you can write your own middleware wherever you want, for example in the action creators file.
You don't need to import all the middlewares with applyMiddleware before create the store.

Just import the injector:

```javascript
import injectMiddleware from "redux-middleware-injector"

const store = createStore(rootReducer, applyMiddleware(injectMiddleware))

```
And then you can write your own middlewares like the example below:

```javascript
export const getUser = username => store => {
  const {dispatch} = store

  return next => action => {
    dispatch({type: 'modules/Github/FETCHING'})

    return axios.get(`https://api.github.com/users/${username}`).then(res => {
      dispatch({
        type: 'modules/Github/SUCCESS',
        payload: {
          data: res.data
        }
      })
    })
  }
}
```

See [Redux documentation](http://redux.js.org/docs/advanced/Middleware.html) about Middlewares
