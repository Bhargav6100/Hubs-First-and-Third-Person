import React from "react";
//import { Popover } from "../popover/Popover";
//import { CAMERA_MODE_THIRD_PERSON_VIEW, CAMERA_MODE_FIRST_PERSON } from "../systems/camera-system";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as ChatIcon } from "../icons/Chat.svg";
import { FormattedMessage, useIntl, defineMessages, FormattedRelativeTime } from "react-intl";
import { CAMERA_MODE_THIRD_PERSON_VIEW, CAMERA_MODE_FIRST_PERSON } from "../../systems/camera-system";

// const enableThirdPersonView =()=>{ this.props.store.state.preferences;
//     this.props.scene.systems["hubs-systems"].cameraSystem.setMode(
//       enableThirdPersonView ? CAMERA_MODE_THIRD_PERSON_VIEW : CAMERA_MODE_FIRST_PERSON
//     );
//     }
export const POVPopoverButton=()=>{
   return(
    <ToolbarButton
      icon={<ChatIcon />}
      preset="accent4"
      label={<FormattedMessage id="POV-toolbar-button" defaultMessage="POV" />}
    //   onClick={this.enableThirdPersonView}
    />
   )
}