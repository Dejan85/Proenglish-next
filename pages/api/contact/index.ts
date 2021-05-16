import nc from "next-connect";
import contact from "server/controllers/contact";
const handler = nc();

handler.post(contact);

export default handler;
