export const fetchRandomImage = async (size: number) => {
	return await fetch(`https://picsum.photos/${size}`).then((res) => res.url)
}
