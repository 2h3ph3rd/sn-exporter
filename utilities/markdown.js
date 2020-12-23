var { execSync } = require('child_process')
var fs = require('fs')

module.exports = {
  /**
   * Convert a markdown text to pdf and return it as bytes array.
   * @param {String} uuid is used as tmp name folder
   * @param {String} text file content
   * @return {Bytes[]} pdf file
   */
  toPdf(uuid, text) {
    base_path = './tmp/' + uuid
    markdown_file_path = base_path + '/note.md'
    pdf_file_path = base_path + '/note.pdf'

    // create folder for conversion
    execSync('mkdir ' + base_path)

    // write text to file
    fs.writeFileSync(markdown_file_path, text)

    // convert file to pdf
    execSync('md-to-pdf ' + markdown_file_path)

    // read file converted
    pdf = fs.readFileSync(pdf_file_path)

    // remove tmp files stored in memory
    execSync('rm -rf ' + base_path)

    return pdf
  },
}
