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
  return (
    extensions.includes(number.slice(0, 2)) &&
    number.length === SN_PHONE_NUMBER_LENGTH
  );
};
const OtpConfirmation = ({navigation}) => {
  const [code, setCode] = useState('');
  return (
    <Center
      _dark={{bg: 'blueGray.900'}}
      _light={{bg: 'blueGray.50'}}
      px={4}
      flex={1}>
      <VStack space={5} alignItems="center">
        <Heading size="lg">Confirmation</Heading>
        <HStack space={2} alignItems="center">
          <Box w="100%" maxWidth="300px">
            <FormControl isRequired>
              <Stack mb="30px">
                <FormControl.Label>Code OTP</FormControl.Label>
                <Input
                  type="number"
                  keyboardType="numeric"
                  placeholder=""
                  value={code}
                  onChangeText={number => {
                    setCode(number);
                  }}
                />
                <FormControl.HelperText>
                  Veuillez renseigner le code qui vous a été envoyé par SMSM
                </FormControl.HelperText>
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  Le numero que vous avez fournit n'est pas valid
                </FormControl.ErrorMessage>
              </Stack>
              <Stack>
                <Button
                  bg="blue.900"
                  onPress={() => navigation.navigate('app')}>
                  Confirmer
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

export default OtpConfirmation;
