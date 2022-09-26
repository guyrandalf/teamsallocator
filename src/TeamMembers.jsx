import TeamMemberCard from "./TeamMemberCard"
const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return (
    <TeamMemberCard employees={employees} handleEmployeeCardClick={handleEmployeeCardClick} selectedTeam = {selectedTeam} />
  )
}
export default TeamMembers