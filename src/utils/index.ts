export const cancelablePromise = <T>(promise: Promise<T>) => {
  let hasCanceled = false

  const wrappedPromise = new Promise<T>((resolve, reject) => {
    promise.then(
      (value) => hasCanceled ? '' : resolve(value),
      (error) => hasCanceled ? '' : reject(error)
    )
  })

  return {
    promise: wrappedPromise,
    cancel: () => {
      hasCanceled = true
    },
  }
}

export const removeProperties = (object: Record<string, any>, propertiesToRemove: string[]) => Object
  .keys(object)
  .reduce((accumulator, currentKey) => {
    if (propertiesToRemove.includes(currentKey)) {
      return accumulator
    }

    return { ...accumulator, [currentKey]: object[currentKey] }
  }, {})
