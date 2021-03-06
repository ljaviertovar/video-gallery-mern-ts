import { RequestHandler } from "express"
import Video from "./Video"

export const getVideos: RequestHandler = async (req, res) => {
	try {
		const videos = await Video.find()
		return res.json(videos)
	} catch (error) {
		return res.json(error)
	}
}

export const getVideo: RequestHandler = async (req, res) => {
	const videoFound = await Video.findById(req.params.id)
	if (!videoFound) return res.status(204).json()
	res.json(videoFound)
}

export const createVideo: RequestHandler = async (req, res) => {
	const video = new Video(req.body)

	const videoFound = await Video.findOne({ url: req.body.url })
	if (videoFound)
		return res.status(301).json({ message: "The video already exist" })

	const savedVideo = await video.save()
	res.json(savedVideo)
}

export const deleteVideo: RequestHandler = async (req, res) => {
	const videoFound = await Video.findByIdAndDelete(req.params.id)
	if (!videoFound) return res.status(204).json()
	res.json(videoFound)
}

export const updateVideo: RequestHandler = async (req, res) => {
	const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	})
	if (!videoUpdated) return res.status(204).json()
	res.json(videoUpdated)
}
