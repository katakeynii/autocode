import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  Button,
  FormControl,
  WarningOutlineIcon,
  Stack,
  Input,
  VStack,
  Box,
} from 'native-base';
const SN_PHONE_NUMBER_LENGTH = 9;

const isNumberValid = number => {
  const extensions = ['77', '76', '78', '70', '72'];

  console.log('lenght of number ', number.length === SN_PHONE_NUMBER_LENGTH);
  console.log(extensions.includes(number.slice(0, 2)));
  return (
    extensions.includes(number.slice(0, 2)) &&
    number.length === SN_PHONE_NUMBER_LENGTH
  );
};
const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [phoneValidity, setPhoneValidity] = useState(false);
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Connexion</Heading>
        <HStack space={2} alignItems="center">
          <Box w="100%" maxWidth="300px">
            <FormControl isRequired isInvalid={phoneValidity}>
              <Stack mb="30px">
                <FormControl.Label>Numero de téléphone</FormControl.Label>
                <Input
                  type="tel"
                  placeholder="7X XXX XX XX"
                  value={phone}
                  onChangeText={number => {
                    setPhone(number);
                    setPhoneValidity(!isNumberValid(number));
                  }}
                />
                <FormControl.HelperText>
                  Veuillez donner votre numero de téléphone
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Le numero que vous avez fournit n'est pas valid
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <Button
                  bg="blue.900"
                  onPress={() => navigation.navigate('OtpConfirmationPage')}>
                  Se Connecter
                </Button>
              </Stack>
            </FormControl>
          </Box>
        </HStack>
      </VStack>
    </Center>
  );
};

const styles = StyleSheet.create({});

export default Login;
