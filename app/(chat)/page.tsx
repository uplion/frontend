import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import { AI } from '@/lib/chat/actions'
import { auth } from '@/auth'

export const metadata = {
  title: 'Uplion AI Chatbot'
}

export default async function IndexPage() {
  const id = nanoid()
  const session = auth() as any

  return (
    <AI initialAIState={{ chatId: id, messages: [] }}>
      <Chat id={id} session={session} />
    </AI>
  )
}
