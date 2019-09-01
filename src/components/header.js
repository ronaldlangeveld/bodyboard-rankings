import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const Header = () => {


  return (
    <>




        <div className="hero is-fullheight is-transparent">
          <div className="hero-header is-hidden-mobile">

            <div className="container-fluid">
              <div className="columns">

                <div className="column is-6">

                </div>
                <div className="column is-6">
                  <br />
                  <div className="yellowBoard">
                    <p className="is-size-5 has-text-weight-bold is-uppercase verticalCenter2 has-text-right">Updated: 1 September 2019 &nbsp;</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
          <div className="hero-body">

          </div>
          <div className="hero-footer">

            <div className="container">
              <span className="is-size-3 has-text-weight-bold has-text-white is-uppercase is-size-3-mobile">The Unoffical</span>
              <p className="bigText has-text-weight-bold has-text-white is-uppercase is-size-1-mobile">Bodyboarding <br /> World Tour </p>
              <br />

              <div className="leaderboard">
                <div className="columns">
                  <div className="column">
                    <div>

                      <span className="is-size-1 has-text-weight-bold is-uppercase is-size-1-mobile">&nbsp; Leaderboard</span>
                    </div>

                  </div>

                </div>
              </div>
              <br />

            </div>

          </div>


        </div>

    </>

  )
}



export default Header
