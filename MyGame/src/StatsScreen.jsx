
function StatsScreen({levelsCompleted,totalDamageDealt,playerKills,
    totalGoldGained,showGameScreen}) {
    return (
      <>
        <div className="stats-screen">
            <h1>Stats</h1>
            <div className="stats-container">
                <p>Levels completed: {levelsCompleted}</p>
                <p>Total damage dealt: {totalDamageDealt}</p>
                <p>Player kills: {playerKills}</p>
                <p>Total gold gained: {totalGoldGained}</p>
                <p>Gold spent: 12</p>
            </div>
            <button onClick={showGameScreen}>Back to level screen</button>
        </div>
      </>
    )
}

export default StatsScreen