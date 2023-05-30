import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const Signup = () => {
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        
          <VStack
            alignItems={'stretch'}
            spacing={'10'}
            w={['full', '150']}
            m={'auto'}
            my={'10'}
          >
            <Heading>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'50'} />
  
            <Input
              placeholder={'Name'}
              type={'text'}
              required
              focusBorderColor={'red.500'}
            />
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'red.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'red.500'}
            />
  
            <Button colorScheme={'red'} type={'submit'}>
              Sign Up
            </Button>
  
            <Text textAlign={'right'}>
              Already Signed Up?{' '}
              <Button variant={'link'} colorScheme={'red'}>
                <Link to={'/login'}>Login In</Link>
              </Button>
            </Text>
          </VStack>
        
      </Container>
    );
  };
  
  export default Signup;