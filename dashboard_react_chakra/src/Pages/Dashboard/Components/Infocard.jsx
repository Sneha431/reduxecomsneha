import { Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../Chakra/Customcard"


const Infocard = ({ imgUrl, buttontext, inverted, text }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize={"cover"} bgRepeat={"no-repeat"} bgColor={inverted ? "p.purple" : "white"}>
      <Tag bg={!inverted ? "p.purple" : "white"} color={inverted ? "p.purple" : "white"} borderRadius={"full"}>{buttontext}</Tag>
      <Text textStyle={"h6"} mt="3" color={!inverted ? "black.80" : "white"}>{text}</Text>
    </CustomCard>
  )
}

export default Infocard
