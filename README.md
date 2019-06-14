This project provides an example of how to use the [iotcomms-react-webrtc](https://github.com/iotcomms/iotcomms-react-webrtc) component.

To get started:
```
#git clone https://github.com/iotcomms/iotcomms-react-webrtc-example.git
#npm install
#npm start
```
The demo application takes domain, userid, password and destination URL parameters. 
Note! You must use ```encodeURIComponent()``` to encode these values before putting them as parameters.

For example

http://localhost:3000/?userid=myuser&domain=sip.sipdomain.com&password=encodedpassword&destination=user%40sip.sipdomain.com


Caution! The user of URL parameters for password and userid is for development and test purpose only! Dont do this in production.

The relevant source code example is App.js found in the src directory.

*This project is sponsored by [iotcomms.io](https://iotcomms.io).*
