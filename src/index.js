
export default store => next => action => {
      const {type, payload} = action

      if (type === 'MIDDLEWARE' && typeof payload === 'function') {
          return payload(store)(next)(action)
     }

    return next(action)
}
