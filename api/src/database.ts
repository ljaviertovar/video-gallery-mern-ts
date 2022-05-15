import mongoose from "mongoose"
import config from "./config"

const { MONGO_DB, MONGO_HOST, MONGO_PASS, MONGO_USER } = config

;(async () => {
	try {
		const db = await mongoose.connect(`mongodb://${MONGO_HOST}/${MONGO_DB}`)
		console.log("db is connected to:", db.connection.name)
	} catch (err) {
		console.log(err)
	}
})()
