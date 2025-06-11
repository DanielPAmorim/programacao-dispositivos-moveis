import { useContext } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../contexts/AuthContext";

function Login({ navigation }) {
  const { control, handleSubmit } = useForm();
  const { erro, login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    await login({...data});
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Controller
        control={control}
        name="email"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ marginBottom: 8 }}
            mode="outlined"
            label="E-mail"
            autoCapitalize="none"
            keyboardType="email-address"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="senha"
        render={({ field: { value, onChange } }) => (
          <TextInput
            style={{ marginBottom: 8 }}
            mode="outlined"
            label="Senha"
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <Button
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        style={{ marginBottom: 8 }}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("Registrar")}
        style={{ marginBottom: 8 }}
      >
        Registrar
      </Button>
      <HelperText type="error" visible={!!erro}>
        {erro}
      </HelperText>
    </View>
  );
}

export default Login;