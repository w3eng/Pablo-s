import 'dotenv/config'      // automatycznie ładuje .env
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Połączenie z MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Połączono z MongoDB Atlas"))
  .catch(err => console.error("Błąd połączenia:", err))

// Schemat newslettera
const NewsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
})

const Newsletter = mongoose.model("Newsletter", NewsletterSchema)

// Endpoint do zapisu emaili
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body
    if (!email) return res.status(400).json({ message: "Email wymagany" })

    await Newsletter.create({ email })
    res.json({ message: "Zapisano do newslettera!" })
  } catch (err) {
    res.status(500).json({ message: "Ten email już istnieje lub błąd serwera." })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Serwer działa na porcie ${PORT}`))
