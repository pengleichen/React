import React from 'react'

function Repo({match}) {
  const {user, repo} = match.params
  return <div>用户名：{user}，仓库名：{repo}</div>
}

export default Repo