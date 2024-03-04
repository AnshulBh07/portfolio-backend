import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import HTML_TEMPLATE from "./mail/template";
import { SENDMAIL } from "./mail/mail";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("on the server").status(200);
});

export type contactData = { message: string; name: string; email: string };

app.post("/contact", async (req: Request, res: Response) => {
  // get data from req body
  const data: contactData = req.body;
  let message: string, name: string, email: string;

  if (data) {
    message = data.message;
    name = data.name;
    email = data.email;
  } else {
    res.send("Incomplete data, please send complete data").status(400);
  }

  const options = {
    from: "portfoliosite07@gmail.com",
    to: "anshulbh009@gmail.com",
    subject: "Someone has contacted you through your website.",
    html: HTML_TEMPLATE(data),
  };

  try {
    await SENDMAIL(options);
    console.log("Email sent successfully");
    res.send("ok").status(200);
  } catch {
    res.send("failed").status(500);
  }
});

app.listen(port, () => console.log(`server started on port ${port}`));
