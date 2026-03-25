import { app } from "@/app"
import { env } from "./env" 

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
