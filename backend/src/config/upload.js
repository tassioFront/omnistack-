const multer = require('multer')
const path = require('path') //para encotnrar o caminha indenpendete do SO


module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname)
            const name = path.basename(file.originalname, ext)


            callback(null, `${name}-${Date.now()}${ext}`)
        }
    })
}