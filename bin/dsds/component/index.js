import React, { Component } from 'react'
import { observer } from 'mobx-react'
import store from './store'
import style from './style.less'
import { Row, Col, Button } from 'antd'

@observer
export default class 1234 extends Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
    static defaultProps = {}
    
    componentWillMount() {}
    
    componentWillReceiveProps(nextProps) {}
    render() {
        return(<div>1234</div>)
    }
  }