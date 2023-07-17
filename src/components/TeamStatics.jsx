import React from 'react'
import { useParams } from 'react-router-dom'
import { useDataStanding } from '../hooks'
import { useDataTeamsStandings } from '../hooks/'
import { TeamNameCard } from '../components/'

export const TeamStatics = () => {

    const {teamId} = useParams();

    const dataStanding = useDataTeamsStandings(teamId);
    
    


    
    


  return (
    <>
    
    <TeamNameCard teamId={teamId}/>

    
    <div>TeamStatics</div>
    
    </>
  )
}
