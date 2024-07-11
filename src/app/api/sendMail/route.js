import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method === "POST") {
    const { name_1, tel_1, state_1, district_1, Description_1 } =
      await req.json();
    console.log(req.json());

    // Configure the transporter
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "namasricharan@gmail.com", // Your email address
        pass: process.env.PASSKEY, // Your email password or app-specific password
      },
    });

    // Define email options
    let mailOptions = {
      from: "namasricharan@gmail.com",
      to: "namasricharan@gmail.com", // The recipient's email address
      subject: "New Career Form Submission",
      text: `Name: ${name_1}\nContact Number: ${tel_1}\nState: ${state_1}\nDistrict: ${district_1}\nDescription: ${Description_1}`,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
