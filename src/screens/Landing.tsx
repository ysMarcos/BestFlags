import { Button, SafeAreaView } from "react-native"

const Landing = ({navigation}: any) => {
    return (
        <SafeAreaView>
            <Button onPress={() => {
                navigation.navigate("Home");
            } } title="Ir para Home"/>
        </SafeAreaView>
    );
}

export default Landing;
