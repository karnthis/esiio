const Core = require('../libs/Core')

const basePath = 'ddd'

module.exports = class ddd extends Core {
  constructor(cfg = {}) {
    /* cfg == { base, ver, src, agent, db, clientID, clientSecret } */
    super(cfg)
  }

  // PUBLIC
  dogmaAttributes() {
    return this.makePublicGet(`dogma/attributes/`)
  }
  dogmaAttribute(attribute_id) {
    return this.makePublicGet(`dogma/attributes/${attribute_id}/`)
  }
  dogmaDynamic(type_id, item_id) {
    return this.makePublicGet(`dogma/dynamic/items/${type_id}/${item_id}/`)
  }
  dogmaEffects() {
    return this.makePublicGet(`dogma/effects/`)
  }
  dogmaEffect(effect_id) {
    return this.makePublicGet(`dogma/effects/${effect_id}/`)
  }

  // RESTRICTED

}