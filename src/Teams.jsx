const Teams = ({ selectedTeam, handleTeamSelectionChange }) => {
  return (
    <select
      className="form-select"
      value={selectedTeam}
      onChange={handleTeamSelectionChange}
    >
      <option value="Team1">Team 1</option>
      <option value="Team2">Team 2</option>
      <option value="Team3">Team 3</option>
      <option value="Team4">Team 4</option>
    </select>
  );
};

export default Teams;
