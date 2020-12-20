store = {
  '4dc03b2b-ad6f-4e32-8803-c1ddc6f577f7': {
    title: 'Note 36',
    text:
      '### Test\n\n## Test\n\n# Test\n\n* a \n* a\n* a\n* a\n\n\n\n1. a\n2. a\n3. a\n4. a\n\n\n',
    parsedText:
      '# Note 36\n' +
      '\n' +
      '### Test\n' +
      '\n' +
      '## Test\n' +
      '\n' +
      '# Test\n' +
      '\n' +
      '* a \n' +
      '* a\n' +
      '* a\n' +
      '* a\n' +
      '\n' +
      '\n' +
      '\n' +
      '1. a\n' +
      '2. a\n' +
      '3. a\n' +
      '4. a\n' +
      '\n' +
      '\n',
  },
}

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
