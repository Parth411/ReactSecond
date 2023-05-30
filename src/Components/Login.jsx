import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={"container.xl"} h={"100vh"} p={16}>
    <form>
        <VStack alignItems={"stretch"} m={"auto"}>
            <Heading>Wecome Back!</Heading>
            <Input placeholder='Enter Email...' type='email' required m={"auto"} my={15} width={96} />
            <Input placeholder='Enter Password...' type='password' required width={96} m={"auto"} my={15}/>
        
            <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme={'red'} type={'submit'}>
            Log In
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'red'}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>

        </VStack>
    </form>

   </Container>
  )
}

export default Login