import YouTube from 'react-youtube'
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"
import mockData from "../assets/mockdata/mockReviewSubmissionData.json"

function ReviewSubmission(){
  let navigate=useNavigate()
  const { id } = useParams();

  let submission = mockData.filter((row) => row.submissionId == id);
  if (submission.length == 1) {
    submission = submission[0]
    let players = submission.otherPlayers.toString() + "," + submission.submitter
    return(
      <div>
          <button onClick={() => navigate(`/review/`)}>Go Back</button>

          <h1>Admin Review Submission Page for {id}</h1> 
          <YouTube 
            videoId={submission.videoLink}
            opts={
              {
                height: '390',
                width: '640',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              }
            }
          />
          <h3>Players: {players}</h3>
          <h3>Platform: {submission.platform}</h3>
          <h3>Game: {submission.game}</h3>
          <h3>Map: {submission.stage}</h3>
          <h3>Challenge: {submission.challenge}</h3>
          <h3>Message: {submission.message}</h3>

          <button>Accept</button>
          <button>Reject</button>
          
      </div>
    )
  } else {
    return(
      <h1>ERROR: Error finding submission</h1>
    )
  }
}
export default ReviewSubmission