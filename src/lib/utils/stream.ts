export function iteratorToStream(iterator: AsyncIterable<string>) {
  const reader = iterator[Symbol.asyncIterator]()
  const encoder = new TextEncoder()
  return new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.next()
        if (done) {
          controller.close()
          break
        }
        const uint8Array = encoder.encode(value)
        controller.enqueue(uint8Array)
      }
    },
  })
}
