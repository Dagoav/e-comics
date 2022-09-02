import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { issueDetail } from "../../redux/actions";

const Issue = ({ data }) => {

    const dispatch = useDispatch();
    const issue = useSelector((state) => state.issue);

    // useEffect(() => {
    //     let path = data.api_detail_url
    //     dispatch(issueDetail(path))
    // }, [])

    console.log(data);
    return (
        <div className="d-flex flex-column">
            <span src={data.api_detail_url} span />
            <span className='mt-5'>{data.name}</span>
            <span className='mt-5'>{data.issue_number}</span>
        </div>
    )
}
export default Issue