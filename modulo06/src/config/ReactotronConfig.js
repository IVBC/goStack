import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    const tron = Reactotron.configure({ name: 'MyApp' }) // controls connection & communication settings
        .useReactNative() // add all built-in react native plugins
        .connect(); // let's connect!

    console.tron = tron;

    tron.clear();
}
