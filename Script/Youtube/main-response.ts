import createMessage from './lib/factory'
import { RequestDownloadActionMessage } from './src/requestHandler'
import { BrowseMessage, DownloadActionMessage} from './src/responseHandler'
import { $ } from './lib/env'

async function start(): Promise<void> {
  const responseMsg = createMessage($.request.url)
  if (responseMsg) {
    try {
      const body = $.response.bodyBytes as Uint8Array
      if (responseMsg instanceof DownloadActionMessage) {
        let vid = ""
        try {
          const requestMsg = new RequestDownloadActionMessage()
          requestMsg.fromBinary($.request.bodyBytes as Uint8Array)
          vid = requestMsg.getVideoId()
        } catch (e) {
          console.log(e.toString())
        }
        responseMsg.fromBinary(body).pure()
        responseMsg.setVideoId(vid)
      } else {
        responseMsg.fromBinary(body).pure()
        if (responseMsg instanceof BrowseMessage && responseMsg.needTranslate) {
          await responseMsg.translate()
        }
      }
      responseMsg.doneResponse()
    } catch (e) {
      console.log(e.toString())
      $.exit()
    }
  } else {
    $.msg('YouTube Enhance', '脚本需要更新', '外部资源 -> 全部更新')
    $.exit()
  }
}

void start()
