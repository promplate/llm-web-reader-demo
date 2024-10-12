export function cached<T extends (arg: any) => any>(fn: T, maxSize = 3): (arg: Parameters<T>[0]) => ReturnType<T> {
  const cache = new Map<Parameters<T>[0], ReturnType<T>>()

  return function (arg: Parameters<T>[0]) {
    if (cache.has(arg)) {
      return cache.get(arg) as ReturnType<T>
    }

    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value
      cache.delete(firstKey)
    }

    const result = fn(arg)
    cache.set(arg, result)

    if (result instanceof Promise) {
      result.then((res) => cache.has(res) && cache.set(arg, res))
    }

    return result
  }
}
