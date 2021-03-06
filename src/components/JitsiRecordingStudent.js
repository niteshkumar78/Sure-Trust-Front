/*eslint-disable*/

import React, { Component } from "react";

class JitsiRecordingStudent extends Component {
  domain = "meet.jit.si";
  // domain = "jitsi.peer2peerloan.tech";

  api = {};

  constructor(props) {
    super(props);
    this.state = {
      room: localStorage.getItem("MeetCodeStudent"),
      user: {
        name: localStorage.getItem("MeetNameStudent"),
        Email: "jhbdhjbdshd",
      },
      isAudioMuted: true,
      isVideoMuted: true,
    };
  }

  startMeet = () => {
    const options = {
      roomName: this.state.room,
      height: "100%",
      width: "100%",

      configOverwrite: {
        prejoinPageEnabled: false,
        startWithVideoMuted: true,
        startWithAudioMuted: true,
        remoteVideoMenu: {
          disableKick: true,
        },
        disableRemoteMute: true,
        enableLipSync: false,
      },
      interfaceConfigOverwrite: {
        // overwrite interface properties
        filmStripOnly: false,
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,

        TOOLBAR_BUTTONS: [
          "camera",
          "microphone",
          "hangup",
          "desktop",
          "profile",
          "chat",
          "videoquality",
          "tileview",
          "select-background",
          "help",
          "raisehand",
          "closedcaptions",
          "participants",
        ],
      },
      parentNode: document.querySelector("#jitsi-iframe"),
      userInfo: {
        displayName: this.state.user.name,
      },
    };
    this.api = new window.JitsiMeetExternalAPI(this.domain, options);

    this.api.addEventListeners({
      readyToClose: this.handleClose,
      participantLeft: this.handleParticipantLeft,
      participantJoined: this.handleParticipantJoined,
      videoConferenceJoined: this.handleVideoConferenceJoined,
      videoConferenceLeft: this.handleVideoConferenceLeft,
      audioMuteStatusChanged: this.handleMuteStatus,
      videoMuteStatusChanged: this.handleVideoStatus,
    });
    this.api.executeCommand("subject", "Sure Trust");
  };

  handleClose = () => {
    console.log("handleClose");
  };

  handleParticipantLeft = async (participant) => {
    console.log("handleParticipantLeft", participant); // { id: "2baa184e" }
    const data = await this.getParticipants();
  };

  handleParticipantJoined = async (participant) => {
    console.log("handleParticipantJoined", participant); // { id: "2baa184e", displayName: "Shanu Verma", formattedDisplayName: "Shanu Verma" }

    const data = await this.getParticipants();
  };

  handleVideoConferenceJoined = async (participant) => {
    console.log("handleVideoConferenceJoined", participant); // { roomName: "bwb-bfqi-vmh", id: "8c35a951", displayName: "Akash Verma", formattedDisplayName: "Akash Verma (me)"}
    const data = await this.getParticipants();
  };

  handleVideoConferenceLeft = () => {
    console.log("handleVideoConferenceLeft");
    // return this.props.history.push("/thank-you");
    localStorage.removeItem("MeetCodeStudent");
    localStorage.removeItem("MeetNameStudent");
    window.close();
  };

  handleMuteStatus = (audio) => {
    console.log("handleMuteStatus", audio); // { muted: true }
  };

  handleVideoStatus = (video) => {
    console.log("handleVideoStatus", video); // { muted: true }
  };

  getParticipants() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.api.getParticipantsInfo()); // get all participants
      }, 500);
    });
  }

  // custom events
  // executeCommand(command) {
  //   this.api.executeCommand(command);
  //   if (command == "hangup") {
  //     return this.props.history.push("/thank-you");
  //   }

  //   if (command == "toggleAudio") {
  //     this.setState({ isAudioMuted: !this.state.isAudioMuted });
  //   }

  //   if (command == "toggleVideo") {
  //     this.setState({ isVideoMuted: !this.state.isVideoMuted });
  //   }
  // }

  componentDidMount() {
    if (window.JitsiMeetExternalAPI) {
      this.startMeet();
    } else {
      alert("JitsiMeetExternalAPI not loaded");
    }
  }

  render() {
    const { isAudioMuted, isVideoMuted } = this.state;
    console.log("loader", this.state.loader);
    return (
      <React.Fragment>
        <div id="jitsi-iframe" style={{ height: "100vh" }}></div>

        {/* <header className="nav-bar">
            <p className="item-left heading">Jitsi React</p>
          </header>
          <div id="jitsi-iframe"></div>
          <div className="item-center">
            <span>Custom Controls</span>
          </div>
          <div className="item-center">
            <span>&nbsp;&nbsp;</span>
            <i
              onClick={() => this.executeCommand("toggleAudio")}
              className={`fas fa-2x grey-color ${
                isAudioMuted ? "fa-microphone-slash" : "fa-microphone"
              }`}
              aria-hidden="true"
              title="Mute / Unmute"
            >
              audio
            </i>
            <i
              onClick={() => this.executeCommand("hangup")}
              className="fas fa-phone-slash fa-2x red-color"
              aria-hidden="true"
              title="Leave"
            ></i>
            <i
              onClick={() => this.executeCommand("toggleVideo")}
              className={`fas fa-2x grey-color ${
                isVideoMuted ? "fa-video-slash" : "fa-video"
              }`}
              aria-hidden="true"
              title="Start / Stop camera"
            ></i>
            <i
              onClick={() => this.executeCommand("toggleShareScreen")}
              className="fas fa-film fa-2x grey-color"
              aria-hidden="true"
              title="Share your screen"
            ></i>
          </div> */}
      </React.Fragment>
    );
  }
}

export default JitsiRecordingStudent;
