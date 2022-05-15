import dotenv from "dotenv"
dotenv.config()

export default {
	MONGO_DB: process.env.MONGO_DB || "video-gallery",
	MONGO_USER: process.env.MONGO_USER || "admin",
	MONGO_PASS: process.env.MONGO_PASS || "admin",
	MONGO_HOST: process.env.MONGO_HOST || "localhost",
	PORT: process.env.PORT || 3002,
}
