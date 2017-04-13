
export default store => next => action => {

    if (typeof action === 'function' && typeof action(store) === 'function') {
          return action(store)(next)(action)
    }

    return next(action)
}
