import React from "react";
import { Container } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import TopBar from "./src/components/TopBar";

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    const loading = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font
      });
      setIsReady(true);
    };
    loading();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <TopBar />
    </Container>
  );
};

export default App;
