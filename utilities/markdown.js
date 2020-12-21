var { execSync } = require('child_process')
var fs = require('fs')

module.exports = {
  toPdf(item_uuid, text) {
    filename = item_uuid
    markdown_filename = filename + '.md'
    pdf_filename = filename + '.pdf'

    fs.writeFileSync(markdown_filename, text)

    execSync('md-to-pdf ' + markdown_filename)
    pdf = fs.readFileSync(pdf_filename)

    fs.unlinkSync(markdown_filename)
    fs.unlinkSync(pdf_filename)

    return pdf
  },
}
