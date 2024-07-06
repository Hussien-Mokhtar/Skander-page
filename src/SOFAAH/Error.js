import { Link } from "react-router-dom";
function Error(){
    return(
  <>
<div className="err">
    <h1>Not found | 404</h1>
</div>
<div className="err2">

<h3><Link to = "/"> Back to Home</Link></h3>


</div>
  </>
    )
}
export default Error;