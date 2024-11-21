import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import 'tippy.js/dist/tippy.css';

import { Wrapper as PoperWrapper } from "~/components/Poper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/Button";
import {
  faSpinner,
  faMagnifyingGlass,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);
export default function Header() {
  const [searchResult,setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
        setSearchResult(["Item 1", "Item 2"]);
    }, 1000);
}, []);

  
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok-Logo" />
        </div>
        
          <Tippy
            interactive
            visible =  {searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PoperWrapper>
                     <h4 className={cx('search-tilte')}>
                        Accounts
                      </h4>
                      <AccountItem/>
                      <AccountItem/>
                      <AccountItem/>
                      <AccountItem/>
                      <AccountItem/>
                  </PoperWrapper>
                </div>
            )}
          >
            <div className={cx("search")}>
              <input placeholder="Search accounts and video" spellCheck={false} />
              <button className={cx("clear")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
        </div>
      </div>
    </header>
  );
}
