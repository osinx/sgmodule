import { createRequestMessage } from './lib/factory'
import { $ } from './lib/env'

const requestMsg = createRequestMessage($.request.url)

try {
  const bodyBytes = requestMsg.fromBinary($.request.bodyBytes as Uint8Array).pure().toBinary()
  $.done({
    bodyBytes
  })
} catch (e) {
  $.log(e.toString())
  $.exit()
}
