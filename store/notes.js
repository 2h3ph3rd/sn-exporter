var utilities = require('../utilities')

store = {}

module.exports = {
  /**
   * Save a new note in store
   * @param {StandardNoteResponse} note note returned by Standard Note in a post request
   */
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
  /**
   * Return a note from store by uuid
   * @param {String} item_uuid note uuid
   * @return {String} markdown text
   */
  get(item_uuid) {
    if (store[item_uuid] == null) {
      return null
    }
    return store[item_uuid].markdown
  },
  /**
   * Check if a note is present in store by uuid
   * @param {String} item_uuid note uuid
   * @return {Boolean} true if present, otherwise false
   */
  present(item_uuid) {
    if (store[item_uuid] != null) {
      return true
    }
    return false
  },
  /**
   * Delete a note from store by uuid
   * @param {String} item_uuid note uuid
   */
  delete(item_uuid) {
    if (store[item_uuid] != null) {
      delete store[item_uuid]
    }
  },
  /**
   * Remove from store notes that are older than 15 minutes
   */
  clean() {
    now = new Date()

    for (key in store) {
      diff = utilities.dates.substract(now, store[key].lastUpdate)
      if (utilities.dates.millisecondsToMinutes(diff) > 15) {
        this.delete(key)
      }
    }
  },
}
