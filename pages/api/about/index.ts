import nc from "next-connect";
import dbConnect from "server/config/dbConnect";
import getAbout from "server/controllers/about";
const handler = nc();

dbConnect();

handler.get(getAbout);

export default handler;
