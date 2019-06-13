import React from 'react'
import Layout from '../components/layout'

import aboutStyles from './about.module.css'

const User = ({
  avatar,
  username,
  excerpt,
}) => (
  <div className={aboutStyles.user}>
    <img src={avatar} className={aboutStyles.avatar} alt="" />
    <div className={aboutStyles.description}>
      <h2 className={aboutStyles.username}>{username}</h2>
      <p className={aboutStyles.excerpt}>{excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Layout>
    <h2>About</h2>
    <p>Such wow. Very React.</p>
    <User
      username="Jane Doe"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <User
      username="Bob Smith"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </Layout>
)