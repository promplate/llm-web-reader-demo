export async function* responseToTextStream(res: Response): AsyncGenerator<string> {
  if (!res.body)
    throw new Error("No data")

  const reader = res.body.getReader()
  const decoder = new TextDecoder()

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done)
        break

      yield decoder.decode(value, { stream: true })
    }
  } finally {
    reader.releaseLock()
  }
}

export async function* accumulate(generator: AsyncGenerator<string>): AsyncGenerator<string> {
  let buffer = ""
  for await (const chunk of generator) {
    buffer += chunk
    yield buffer
  }
}
