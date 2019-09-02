import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'flag-icon-css/css/flag-icon.min.css'
import NumericLabel from 'react-pretty-numbers';

const MenRiders = () => {



  const mens = useStaticQuery(graphql`
  query MensRank {
    allMensRankingsJson(limit: 5) {
      edges {
        node {
          rider_name
          rider_country
          rider_rank
          profile_pic
          total_points
          country_code
        }
      }
    }
  }
  
`)
  const mRanks = mens.allMensRankingsJson.edges;

  return (
    <>

  {mRanks.map(rider => (


        <tr>
            <td><span className="is-size-4 has-text-weight-bold is-size-7-mobile">{rider.node.rider_rank}</span></td>
            <td className="is-hidden-touch"><div className="profilePicRank" style={{backgroundImage: `url(${rider.node.profile_pic})`}}></div></td>
            <td className="is-hidden-desktop"><div className="profilePicRank_mobile" style={{backgroundImage: `url(${rider.node.profile_pic})`}}></div></td>
            <td><span className="is-size-6 is-size-7-mobile">{rider.node.rider_name}</span> <br /> <span className={`is-size-5 flag-icon flag-icon-${rider.node.country_code}`}></span> <span className="has-text-weight-normal is-size-7">{rider.node.rider_country}</span></td>
            <td className="is-hidden-touch"><span className="is-size-6 is-size-7-mobile"><NumericLabel>{rider.node.total_points}</NumericLabel></span></td>
        </tr>


  ))}


    </>

  )
}



export default MenRiders;
