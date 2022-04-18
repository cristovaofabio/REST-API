import multer from 'multer';
import { extname, resolve } from 'path';

const aleatory = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('file extension is not allowed, you can only upload PNG or JPEG files'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage(
    {
      destination: (req, file, cb) => {
        cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
      },
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${aleatory()}${extname(file.originalname)}`);
      },
    },
  ),
};
