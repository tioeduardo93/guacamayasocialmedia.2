import { Text } from "@chakra-ui/react"

export const Title = ({as, children, ...props}) => {
  return (
    <Text
      fontWeight={'bold'}
      fontSize={'3xl'}
      textAlign={'center'}
      as={as} {...props}>
      {children}
    </Text>
  )
}
