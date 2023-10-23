import multer from 'multer';

// Configuração do multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') // Pasta onde os arquivos serão salvos temporariamente
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) // Nome do arquivo salvo
  }
});

// Exporte o middleware multer configurado
const upload = multer({ storage: storage });

export default upload;