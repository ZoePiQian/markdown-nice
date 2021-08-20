import React, {Component} from "react";
import FormDialog from "../component/Dialog/FormDialog";
import TutorialDialog from "../component/Dialog/TutorialDialog";

class Dialog extends Component {
  render() {
    return (
      <div>
        <ImageDialog />
        <LinkDialog />
        <AboutDialog />
        <VersionDialog />
        <FormDialog />
        <HistoryDialog />
        <SitDownDialog />
        <TutorialDialog />
      </div>
    );
  }
}

export default Dialog;
