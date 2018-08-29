import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Title from 'Src/components/Title'
import { userActions } from 'Src/redux/user'

class App extends Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    setUserName: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: {
      name: 'user',
    },
  }

  componentDidMount() {
    const { setUserName } = this.props

    setUserName('Jack')
  }

  render() {
    const {
      user: { name },
    } = this.props

    return <Title title={`Hello ${name}`} />
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(
  mapStateToProps,
  {
    setUserName: userActions.setUserName,
  },
)(App)
