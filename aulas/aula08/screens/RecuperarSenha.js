import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import * as Yup from "yup"

function RedefinirSenha() {
  const schema = Yup.object().shape({
    email: Yup.string().required("E-mail é obrigatório").email("E-mail é inválido")
  });
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validaEmail = async () => {
    try{
      await schema.validate({ email })
      return true;
    } catch(err) {
      setErro(err.errors);
      return false;
    }
  };

  const trataTexto = async (texto) => {
    setEmail(texto);
    await validaEmail();
  }

  const trataEnviar = async () => {
    if (!await validaEmail()) {
      return;
    }
    setEmail("");
    setErro("");
    alert("E-mail enviado!");
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        value={email}
        onChangeText={trataTexto}
        mode="outlined"
        error={erro != ""}
      />
      <HelperText type="error" visible={erro != ""}>
        {erro}
      </HelperText>
      <Button mode="contained" onPress={trataEnviar}>
        Enviar
      </Button>
    </View>
  );
}

export default RedefinirSenha;