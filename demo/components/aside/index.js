import * as React from 'react';

import {YsideBar,YrightBar} from '../../../src/yrUI';

import {rightbarTabs,rightbarTabLists} from '../../models/models';

export default class Yaside extends React.Component {

  constructor(props){
    super(props);
  };

  render() {

    return (
      <aside>
        <YsideBar menu={this.props.sideBarMenu} />
        <YrightBar tabs={rightbarTabs} tabList={rightbarTabLists} />
      </aside>
    );
  }
}
