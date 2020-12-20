store = {}

module.exports = {
  save(note) {
    item_uuid = note.uuid
    title = note.content.title
    text = note.content.text

    store[item_uuid] = {
      title,
      text,
      parsedText: '# ' + title + '\n\n' + text,
    }
  },
  get(item_uuid) {
    if (store[item_uuid] == null) {
      return null
    }
    return store[item_uuid].parsedText
  },
  present(item_uuid) {
    if (store[item_uuid] != null) {
      return true
    }
    return false
  },
}
