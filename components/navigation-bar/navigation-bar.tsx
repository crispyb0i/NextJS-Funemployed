import {
	Avatar,
	Box,
	Center,
	Flex,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineUser } from "react-icons/ai"
import NextLink from "next/link"

export const NavigationBar: FC = () => {
	return (
		<Box
			as="section"
			zIndex={9999}
			top={0}
			position="sticky"
			mb="10"
			backgroundColor="teal.300"
		>
			<Box
				as="nav"
				bg="bg-surface"
				boxShadow={"sm"}
				py={4}
				px={{ base: 4, lg: 10 }}
			>
				<Flex justify="space-between">
					<Center>
						<Link as={NextLink} href="/" textDecoration="none">
							<Text color="white">MY DOMAIN</Text>
						</Link>
					</Center>
					<Menu>
						<MenuButton
							as={IconButton}
							background="none"
							variant="none"
							_hover={{ bg: "none" }}
							_expanded={{ bg: "none" }}
							_focus={{ bg: "none" }}
							icon={
								<Avatar bg="gray.600" boxSize="10" icon={<AiOutlineUser />} />
							}
							aria-label="Open Menu"
						/>
						<MenuList>
							<MenuItem>Profile</MenuItem>
							<MenuItem>About</MenuItem>
							<MenuItem>Help</MenuItem>
							<MenuItem>Settings</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Box>
		</Box>
	)
}
