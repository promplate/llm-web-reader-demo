import { toast } from "svelte-sonner"

export async function copy(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard")
  } catch (err) {
    toast.error(String(err))
  }
}
