
import { NextApiResponse, NextApiRequest } from 'next';
import { db } from '../../database';

type Data = {
   ok: boolean,
   message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

   if (process.env.NODE_ENV === 'production') {
      return res.status(401).json({ ok: false, message: 'No tiene acceso a este servicio' });
   }


   db.connect();



   db.disconnect();

   res.status(200).json({
      ok: true,
      message: 'Proceso terminado correctamente',
   })
}