import React from 'react'
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

export default function SideBar() {
  return (
    <div className={cx('wrapper')}>
      SideBar
    </div>
  )
}
