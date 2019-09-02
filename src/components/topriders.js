import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import 'flag-icon-css/css/flag-icon.min.css'
import MenRiders from './menRiders'
import WomenRiders from './womenRiders';

const TopRiders = () => {

    const yellowBG = {
        backgroundColor: '#F0CA66'
    }


  return (
    <section className="bg-gold">



    <div className="container">
    <br />
    <br />
        <div className="columns is-centered ">

            <div className="column is-5">
            <p className="is-size-2 has-text-weight-bold is-uppercase has-text-centered has-text-light is-size-6-mobile">Top 5 Womens World Rankings </p>
            <br />
            {/* <p className="title is-5">Top 5 Womens World Rankings</p> */}
            <div className="card">


  <div className="card-content">
  <table className="table is-fullwidth">

      <thead>
          <tr>
            <td className="has-text-white is-size-7-mobile">Rank</td>
            <td></td>
            <td></td>
            <td className="has-text-white is-hidden-touch is-size-7-mobile">Points</td>

          </tr>
      </thead>

<tbody>

    <WomenRiders />

    </tbody>

</table>
  </div>


</div>
<br />
<div className="has-text-centered">
<Link to="/rankings/women" className="button is-outlined is-inverted is-warning has-text-weight-bold customBtn">See full rankings</Link>
</div>

            </div>

            <div className="column is-5">
            {/* <p className="title is-5">Top 5 Mens World Rankings</p> */}
            <p className="is-size-2 has-text-weight-bold is-uppercase has-text-centered has-text-light is-size-6-mobile">Top 5 Mens World Rankings</p>
            <br />
            <div className="card">


  <div className="card-content">
  <table className="table is-fullwidth">

      <thead>
          <tr>
            <td className="has-text-white">Rank</td>
            <td></td>
            <td></td>
            <td className="has-text-white is-hidden-touch is-size-7-mobile">Points</td>

          </tr>
      </thead>

<tbody>
<MenRiders />
    </tbody>

</table>
  </div>


</div>
<br />

<div className="has-text-centered">
<Link to='/rankings/men' className="button is-outlined is-inverted is-warning has-text-weight-bold customBtn">See full rankings</Link>

</div>

</div>

        </div>
    </div>
    <br />
    <br />
  </section>

  )
}



export default TopRiders
