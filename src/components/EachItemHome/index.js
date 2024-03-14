const EachItemHome = props => {
  const {viedodetails} = props
  const {
    thumbnailUrl,
    viedoTitle,
    channelNam,
    channelProfile,
    viewCount,
    publishDate,
  } = viedodetails
  return (
    <li>
      <div>
        <img src={thumbnailUrl} alt='hskaka' />

        <p>{viedoTitle}</p>
        <p>{viewCount} Watching Worldwide</p>
      </div>
    </li>
  )
}
export default EachItemHome
