import React from "react";
import className from "classnames";
import PropTypes from "prop-types";
import { joinChildren } from "../misc/joinChildren";
import styles from "./ContentMenu.scss";
import { ReactComponent as ObjectsIcon } from "../icons/Objects.svg";
import { ReactComponent as PeopleIcon } from "../icons/People.svg";
import { FormattedMessage } from "react-intl";
import Timer from "./timer";
import { ToggleInput } from "../input/ToggleInput";
import { useForm } from "react-hook-form";
export function ContentMenuButton({ active, children, ...props }) {
  return (
    <button className={className(styles.contentMenuButton, { [styles.active]: active })} {...props}>
      {children}
    </button>
  );
}

ContentMenuButton.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool
};

export function ECSDebugMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <ObjectsIcon />
      <span>
        <FormattedMessage id="content-menu.ecs-debug-menu-button" defaultMessage="ECS Debug" />
      </span>
    </ContentMenuButton>
  );
}

export function ObjectsMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <ObjectsIcon />
      <span>
        <FormattedMessage 
         id="content-menu.objects-menu-button" 
         defaultMessage="Cart"
         values={{objectCount: props.objectCount}} />
      </span>
    </ContentMenuButton>
  );
}

export function PeopleMenuButton(props) {
  return (
    <ContentMenuButton {...props}>
      <PeopleIcon />
      <span>
        <FormattedMessage
          id="content-menu.people-menu-button"
          defaultMessage="People ({presenceCount})"
          values={{ presenceCount: props.presencecount }}
        />
      </span>
    </ContentMenuButton>
  );
}

export function TimerMenuButton(props) {
  return (
    <ContentMenuButton {...props }  
    >
      <span>
        <Timer/>
      </span>
    </ContentMenuButton>
  );
}

PeopleMenuButton.propTypes = {
  presencecount: PropTypes.number
};

export function ContentMenu({ children }) {
  return (
    <div className={styles.contentMenu}>
      {joinChildren(children, () => (
        <div className={styles.separator} />
      ))}
    </div>
  );
}

ContentMenu.propTypes = {
  children: PropTypes.node
};
