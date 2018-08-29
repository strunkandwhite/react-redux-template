import React from 'react'
import PropTypes from 'prop-types'

import styles from './Title.module.scss'

const Title = ({ title }) => <h1 className={styles.root}>{title}</h1>

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
