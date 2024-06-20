import PropTypes from "prop-types";
import React, { useEffect, useRef, useCallback, useState } from "react";

//Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  let users = JSON.parse(localStorage.getItem("authUser") || "{}").user;

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }
    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;
      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag
        const parent3 = parent2.parentElement; // li tag
        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  // Use ComponentDidMount and ComponentDidUpdate method simultaneously
  useEffect(() => {
    const pathName = props.location.pathname;
    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  };

  return (
    <React.Fragment>
      <SimpleBar ref={ref} className="vertical-simplebar">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")}</li>

            {/* Conditionally render different menu items based on user's role */}
            {users.role === "admin" && (
              <React.Fragment>
                {/* <li>
                  <Link to="/appraisalstatus" className="waves-effect">
                    <i className="mdi mdi-checkbox-marked-circle-outline"></i>
                    <span>{props.t("AppraisalStatus")}</span>
                  </Link>
                </li> */}
                <li className="menu-title">{props.t("Roles")}</li>
                <li className="has-arrow">
                  <a href="#" className="waves-effect">
                    <i className="mdi mdi-account-multiple"></i>
                    <span>{props.t("Roles")}</span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/managerstatus">{props.t("Manager")}</Link>
                    </li>
                    <li>
                      <Link to="/teamleadstatus">{props.t("TeamLead")}</Link>
                    </li>
                    <li>
                      <Link to="/supportteamstatus">{props.t("Support Team")}</Link>
                    </li>
                    <li>
                      <Link to="/operationteamstatus">{props.t("Operation Team")}</Link>
                    </li>
                    <li>
                      <Link to="/trainerstatus">{props.t("Trainer")}</Link>
                    </li>
                    <li>
                      <Link to="/developerstatus">{props.t("Developer Trainer")}</Link>
                    </li>
                    <li>
                      <Link to="/devopsstatus">{props.t("DevOps Trainer")}</Link>
                    </li>
                    <li>
                      <Link to="/cloudtrainerstatus">{props.t("Cloud Trainer")}</Link>
                    </li>
                    <li>
                      <Link to="/pegatrainerstatus">{props.t("Pega Trainer")}</Link>
                    </li>
                    <li>
                      <Link to="/networkadministratorstatus">{props.t("Network Administrator")}</Link>
                    </li>
                  </ul>
                </li>
              </React.Fragment>
            )}

            {users.role === "manager" && (
              <li>
                <Link to="/managerappraisalform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "devopstrainer" && (
              <li>
                <Link to="/devopsform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "cloudtrainer" && (
              <li>
                <Link to="/cloudtrainerform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
              {users.role === "trainer" && (
              <li>
                <Link to="/trainerform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "networkadministrator" && (
              <li>
                <Link to="/networkadministratorform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "teamlead" && (
              <li>
                <Link to="/teamleadform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "supportteam" && (
              <li>
                <Link to="/supportteamform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "pegatrainer" && (
              <li>
                <Link to="/pegaform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "developer" && (
              <li>
                <Link to="/developerform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}
            {users.role === "operationteam" && (
              <li>
                <Link to="/operationteamform" className="waves-effect">
                  <i className="mdi mdi-clipboard-play-outline"></i>
                  <span>{props.t("Appraisal Form")}</span>
                </Link>
              </li>
            )}

            {/* Other menu items */}
            {/* ... */}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));