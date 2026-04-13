export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // temporary check (for testing)
    if (email === "test@gmail.com" && password === "1234") {
      return res.status(200).json({ message: "Login success ✅" });
    } else {
      return res.status(401).json({ message: "Invalid email or password ❌" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}