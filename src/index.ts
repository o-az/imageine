import { listen } from 'listhen'
import { createApp, toNodeListener } from 'h3'
import { createIPX, ipxFSStorage, ipxHttpStorage, createIPXH3Handler } from 'ipx'

const ipx = createIPX({
  storage: ipxFSStorage({ dir: './public' }),
  httpStorage: ipxHttpStorage({
    allowAllDomains: true
  })
})

const PORT = Number(import.meta.env.PORT) ?? 5_321

const app = createApp({
  debug: import.meta.env.DEBUG === 'true'
})

app.use('/', createIPXH3Handler(ipx))

listen(toNodeListener(app), {
  qr: true,
  port: PORT,
  name: 'imagein',
  isProd: import.meta.env.NODE_ENV === 'production'
})
