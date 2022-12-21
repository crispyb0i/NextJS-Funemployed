import { fetchRandomImage } from "../api/lorem-picsum"

export const generateRandomImage = (size: number) => {
	return fetchRandomImage(size)
}
