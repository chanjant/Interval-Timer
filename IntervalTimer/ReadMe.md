# COMPSCI 732 / Tech Demo - React Native Mobile Development

>> Kindly note that this tech demo has been primarily developed and tested on iOS and has not been extensively tested on other platforms, hence it may not function optimally on other platforms. Informations on platform differences known will still be provided but they are based on reliable sources from internet and has not been personally tested. Thank you for your understanding and hope you enjoy this Tech Demo!

## How to run Interval Timer
### Step 1: Install Expo CLI
1. Run the following command globally:
```sh
npm i -g expo-cli
```

2. For MacBook users, if you encounter errors like 'The operation was rejected by your operating system'. Try this instead:
```sh
sudo npm i -g expo-cli
```

### Step 2: Download Expo Go or simulator

1. Option 1: Expo Go app
   Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

>> Kindly note that this will not work if you are using university's Wifi. If you do not have any access to other wireless network other than university's Wifi, please use mobile data and connect laptop to mobile hotspot, otherwise, see Option 2 or 3.

2. Option 2: iOS simulator
   Install Xcode from Macbook App Store

3. Option 3: for other development operating system, kindly refer to:
   https://reactnative.dev/docs/environment-setup?guide=native&os=windows

### Step 3: Run Interval Timer
1. Open terminal at ‘App.js' and run the following command:

```sh
npm install
npx expo start
```

- For MacBook and iPhone user, scan the QR code with Camera app which will then lead you to Expo Go, or press i to open iOS simulator (XCode).
Otherwise, please follow the instructions in the terminal.
>> Also, please make sure that you have terminated other Expo projects before running this

Hope you enjoy my Interval Timer!