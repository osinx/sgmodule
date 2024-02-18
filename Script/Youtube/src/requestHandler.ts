
import { Request } from '../lib/protobuf/request/common_pb'
import { RequestDownloadAction } from '../lib/protobuf/request/download_pb'
import { RequestPlayer, OfflineParam } from '../lib/protobuf/request/player_pb'
import { YouTubeMessage } from './youtube'

export default class RequestMessage extends YouTubeMessage {
  constructor(msgType: any = Request, name: string = 'Request') {
    super(msgType, name)
  }

  pure(): this {
    this.message.context.adSignalsInfo.params.length = 0
    this.needProcess = true
    return this
  }
}

export class RequestDownloadActionMessage extends YouTubeMessage {
  constructor(msgType: any = RequestDownloadAction, name: string = 'RequestDownloadAction') {
    super(msgType, name)
  }

  pure(): this {
    return this
  }

  getVideoId(): string {
    return this.message?.videoId
  }
}

export class RequestPlayerMessage extends YouTubeMessage {
  constructor(msgType: any = RequestPlayer, name: string = 'RequestPlayer') {
    super(msgType, name)
  }

  pure(): this {
    if (this.message.p1F8 == 1) {
      this.message.p1F8 = 0;
      this.message.offlineParam = new OfflineParam({
        offlineVideoParam: {
          f5: 18210, // magic?
          f7: 3,
          f12: "video_format=22&sdkv=i.18.49&output=xml_vast2",
          f8: 5,
          f11: 1,
          f29: 1,
          f44: 1
        }
      })
    }
    this.needProcess = true
    return this
  }
}
