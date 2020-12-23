var utilities = require('../utilities')

store = {}

module.exports = {
  save(note) {
    item_uuid = note.uuid
    title = note.content.title
    text = note.content.text

    markdown = text
    if (title != '') {
      markdown = '# ' + title + '\n\n' + text
    }

    store[item_uuid] = {
      title,
      text,
      markdown,
      lastUpdate: new Date(),
      original: note,
    }
  },
  get(item_uuid) {
    if (store[item_uuid] == null) {
      return null
    }
    return store[item_uuid].markdown
  },
  present(item_uuid) {
    if (store[item_uuid] != null) {
      return true
    }
    return false
  },
  delete(item_uuid) {
    if (store[item_uuid] != null) {
      delete store[item_uuid]
    }
  },
  clean() {
    now = new Date()

    for (key in store) {
      if (utilities.dates.substract(now, store[key].lastUpdate) > 15) {
        this.delete(key)
      }
    }
  },
}
