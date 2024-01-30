import {
  BrowseMessage,
  NextMessage,
  PlayerMessage,
  SearchMessage,
  ShortsMessage,
  GuideMessage,
  SettingMessage,
  DownloadActionMessage
} from '../src/responseHandler'
import RequestMessage, {RequestPlayerMessage} from '../src/requestHandler'
import { YouTubeMessage } from '../src/youtube'

const messages = new Map([
  ['browse', BrowseMessage],
  ['next', NextMessage],
  ['player', PlayerMessage],
  ['search', SearchMessage],
  ['reel_watch_sequence', ShortsMessage],
  ['guide', GuideMessage],
  ['get_setting', SettingMessage],
  ['get_download_action', DownloadActionMessage]
])

export default function createMessage (url): YouTubeMessage | null {
  for (const [path, MessageClass] of messages.entries()) {
    if (url.includes(path)) {
      return new MessageClass()
    }
  }
  return null
}


export function createRequestMessage (url): YouTubeMessage {
  if (url.includes('player')) {
    return new RequestPlayerMessage()
  }
  return new RequestMessage()
}
