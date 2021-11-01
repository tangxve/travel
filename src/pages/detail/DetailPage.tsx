import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  console.log(props.match)
  console.log(props.location)
  console.log(props.history)
  return <h1>详情页面：页面ID {props.match.params.touristRouteId}</h1>
}
