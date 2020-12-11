import { writeFileSync, existsSync } from 'fs'
import { resolve } from 'path'
import NodeRSA from 'node-rsa'

const path = resolve('.', 'private.ppk')
try {
  if (!existsSync(path)) {
    const key = new NodeRSA({ b: 1024 })
    const privateKey = key.exportKey('pkcs1-private')
    writeFileSync(path, privateKey)
  }
} catch (err) {
  console.error(err)
}
