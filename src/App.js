//
// Copyright (c) IOT Communications International . All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

/*jslint node: true */
/*jslint white:true */
/*jslint for:true */

import React from "react";
import ReactQueryParams from "react-query-params";

import "./App.css";

//WebRTC component imports
import WebRTCClient from "iotcomms-react-webrtc";



class App extends ReactQueryParams {

  constructor(props,context) {
    super(props,context);
    this.webRtcClientRef = React.createRef();
    this.callControlsRef = React.createRef();
  }



  //Note these video elements must be present with the remoteVideo and localVideo id's to
  //have place to render video for the WebRTCClient component
  render() {
    return (
      <div className="App">
        <video width="25%"  id="localVideo" autoPlay playsInline  muted="muted"></video>
        <video width="50%" id="remoteVideo" autoPlay playsInline ></video>
        <WebRTCClient
          //sipDomain="sip.test.iotcomms.io"
          //sipUser="webrtc"
          //sipPassword="jun*=vlQtNUSeXW@"
          //destination="+46706662326@sip.test.iotcomms.io"
          video={true}
          //destination="jbj2@sip.test.iotcomms.io"
          autoRegister = {true}

          sipDomain={decodeURIComponent(this.queryParams.domain)}
          sipServer={decodeURIComponent(this.queryParams.sipserver)}
          sipUser={decodeURIComponent(this.queryParams.userid)}
          sipPassword={decodeURIComponent(this.queryParams.password)}

          destination={decodeURIComponent(this.queryParams.destination)}
        />
      </div>
    );
  }
}

export default App;
