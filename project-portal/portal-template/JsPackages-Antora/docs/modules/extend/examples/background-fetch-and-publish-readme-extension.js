const https = require('https')

class FetchAndPublishReadmeExtension {
  static register ({ config }) {
    return new FetchAndPublishReadmeExtension(this, config)
  }

  constructor (context, config) {
    ;(this.context = context)
      .on('playbookBuilt', this.onPlaybookBuilt.bind(this))
      .on('beforePublish', this.onBeforePublish.bind(this))
    this.readmeUrl = config.readmeUrl || 'https://gitlab.com/antora/antora/-/raw/HEAD/README.adoc'
    this.contentsPromise = undefined
  }

  playbookBuilt ({ siteCatalog }) {
    this.contentsPromise = new Promise((resolve, reject) => {
      const buffer = []
      https
        .get(this.readmeUrl, (response) => {
          response.on('data', (chunk) => buffer.push(chunk.toString()))
          response.on('end', () => resolve(buffer.join('').trimRight()))
        })
        .on('error', reject)
    })
  }

  async onBeforePublish ({ siteCatalog }) {
    const contents = await this.contentsPromise
    siteCatalog.addFile({ contents: Buffer.from(contents), out: { path: 'README.adoc' } })
  }
}

module.exports = FetchAndPublishReadmeExtension
