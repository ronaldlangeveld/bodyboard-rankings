import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import 'flag-icon-css/css/flag-icon.min.css'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import NumericLabel from 'react-pretty-numbers';


const Women = () => {

    const BackHome = {
        position: 'fixed',
        right: '2em',
        top: '1em',
        zIndex: '100000'
    }

    let currency = {
        justification: 'L',
        currency: true,
      };

    const men = useStaticQuery(graphql`
    query AllMenRank {
      allMensRankingsJson {
        edges {
          node {
            rider_name
            rider_country
            rider_rank
            total_points
            country_code
            since
            career_earnings
          }
        }
      }
    }
  `)
    const mRanks = men.allMensRankingsJson.edges;

    return (
        <Layout>
            <SEO title="Womens Rankings" />

            <section className="bg-gold2">

                <section className="hero">
                    <div className="hero-body is-transparent">
                        <div className="container">
                        <div style={BackHome} className='has-text-right'>
                        <Link to='/' className="title has-text-light is-size-7 button is-outlined is-inverted is-dark customBtnHome">Back home</Link>
                        </div>
                        <br />
                        <br />
                            <h1 className="title is-1 has-text-white has-text-centered is-size-5-mobile">World Bodyboarding Men Rankings</h1>

                        </div>
                    </div>
                </section>



                <div className="container">


                    <div className="columns is-centered">


                        <div className="column is-10">


                            <div className="card">


                                <div className="card-content">
                                    <table className="table is-fullwidth">

                                        <thead>
                                            <tr>
                                                <td className="has-text-white is-size-7-mobile">Rank</td>
                                                <td></td>
                                                <td className="has-text-white is-size-7-mobile is-hidden-touch">On Tour Since</td>
                                                <td className="has-text-white is-size-7-mobile">Points</td>
                                                <td className="has-text-white is-size-7-mobile">Career Earnings</td>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            {mRanks.map(rider => (


                                                <tr>
                                                    <td><span className="is-size-4 has-text-weight-bold is-size-7-mobile">{rider.node.rider_rank}</span></td>
                                                    <td><span className="is-size-6 is-size-7-mobile">{rider.node.rider_name}</span> <br /> <span className={`is-size-5 flag-icon flag-icon-${rider.node.country_code}`}></span> <span className="has-text-weight-normal is-size-7">{rider.node.rider_country}</span></td>
                                                    <td className="is-hidden-touch"><span className="is-size-6 is-size-7-mobile">{rider.node.since}</span></td>
                                                    <td><span className="is-size-6 is-size-7-mobile"><NumericLabel>{rider.node.total_points}</NumericLabel></span></td>
                                                    <td><span className="is-size-6 is-size-7-mobile"><NumericLabel params={currency}>{rider.node.career_earnings}</NumericLabel></span></td>
                                                </tr>


                                            ))}

                                        </tbody>

                                    </table>
                                </div>


                            </div>


                        </div>

                    </div>






                </div>


            </section>



        </Layout>

    )
}



export default Women
