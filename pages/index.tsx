import {
	Center,
	Container,
	Box,
	Text,
	Image,
	Stack,
	Spinner,
} from "@chakra-ui/react"
import { generateRandomImage } from "../hooks/generate-random-image"
import { useEffect, useState } from "react"
import { NavigationBar } from "../components/navigation-bar/navigation-bar"

export default function Home() {
	const [randomImage, setRandomImage] = useState("")
	const imageSize = 200

	useEffect(() => {
		generateRandomImage(imageSize).then((res) => setRandomImage(res))
		// console.log("!!!", generateRandomImage(400).then(res => console.log("HOLY",)))
	}, [])

	return (
		<Box h="100vh">
			<NavigationBar />

			<Container h="-webkit-fit-content">
				{randomImage.length ? (
					<Center h="100%" w="100%">
						<Stack dir="column">
							<Text fontSize="3xl" m="auto" mb="6">
								Welcome To My Domain
							</Text>
							<Center>
								<Image
									w={imageSize}
									src={randomImage}
									alt="random image"
									borderRadius="50%"
								/>
							</Center>
						</Stack>
					</Center>
				) : (
					<Center h="100%">
						<Spinner />
					</Center>
				)}
			</Container>
		</Box>
	)
}
