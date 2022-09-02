import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { volumeDetail } from "../../redux/actions";
import { useParams, useLocation } from "react-router-dom";
import Issue from '../issue/Issue';


const CardDetail = () => {
  const [issueDetail, setIssueDeetail] = useState();

  const { id } = useParams();
  const location = useLocation()
  const comic = useSelector((state) => state.comic);
  const path = location.state.path_detail
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(volumeDetail(path))

  }, [])

  // console.log(location);
  // console.log(location.state.path_detail);

  if (comic) {
    console.log(comic);
  }



  return (
    <>
      {Object.values(comic).length > 0 &&
        <div className='container mt-5'>
          <img src={comic.image.medium_url} alt="" />
          <p> issues: {comic.count_of_issues}</p>

          {
            comic.issues.map(issue_data => (
              <Issue key={issue_data.id} data={issue_data} />
            ))
          }
        </div>
      }
    </>
  );
}

export default CardDetail;