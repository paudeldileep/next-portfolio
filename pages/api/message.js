import fs from "fs";

export default function handler(req, res) {
  const { method, body } = req;
  //const { name, email, message } = JSON.parse(body);

  if (method === "POST") {
    const { name, email, message } = body;

    console.log(name, email, message);
    if (!name || !email || !message) {
      res.status(400).json({ error: "Please fill out all fields" });
      return;
    }

    if (!email.includes("@")) {
      res.status(400).json({ error: "Please enter a valid email" });
      return;
    }

    if (message.length < 10) {
      res
        .status(400)
        .json({ error: "Please enter a message longer than 10 characters" });
      return;
    }

    console.log("Sending message to API");
    //write the content of message to text file
    fs.appendFile(
      "./userdata/messages.txt",
      `\nName:${name} - Email:${email} - Message:${message}`,
      (err) => {
        if (err) {
          res.status(500).json({ error: "Something went wrong" });
          return;
        } else {
          res.status(200).json({ success: "Message sent successfully" });
        }
      }
    );
    //res.status(200).json({ success: "Message sent successfully" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
