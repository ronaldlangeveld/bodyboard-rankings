import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import 'flag-icon-css/css/flag-icon.min.css'
import MenRiders from './menRiders'
import WomenRiders from './womenRiders';

const TopRiders = () => {

  return (
    <>
    <section className="hero is-medium is-dark">
  <div className="hero-body">
    <div className="container">
        <div className="columns is-centered">

            <div className="column is-4">

            <p className="title is-5">Top 5 Womens World Rankings</p>
            <div className="card stripeShadow">


  <div className="card-content">
  <table className="table">

      <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Points</td>

          </tr>
      </thead>

<tbody>

    <WomenRiders />

    </tbody>

</table>
  </div>
  <div className="card-footer">

      <Link className="card-footer-item">See full rankings</Link>

  </div>

</div>

            </div>

            <div className="column is-4">
            <p className="title is-5">Top 5 Mens World Rankings</p>

            <div className="card stripeShadow">


  <div className="card-content">
  <table className="table">

      <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Points</td>

          </tr>
      </thead>

<tbody>
<MenRiders />
    </tbody>

</table>
  </div>
  <div className="card-footer">

      <Link className="card-footer-item">See full rankings</Link>

  </div>

</div>

</div>

        </div>
    </div>
  </div>
</section>

    </>

  )
}



export default TopRiders
