import React from "react";
import WorkersList from "../lists/WorkersList";
const WorkersView = ({ data , OnPress}) => {
    return <WorkersList 
    OnPress={OnPress} 
    fontFamily={{fontFamily:'FontThree'}} 
    title="Our Workers" 
    data={data}
     />
};
export default WorkersView;
