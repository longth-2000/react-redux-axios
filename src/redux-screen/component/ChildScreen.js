import React, { useState, useEffect } from 'react'
const ChildScreen = (props) => {
    const [profileState, setProfileState] = useState(props);
    useEffect(() => {
        setProfileState(props);
      }, [props]);
    
    
    return (
        <div>
            <p>
                {
                    profileState.name
                }
            </p>
        </div>
    );
}
export default ChildScreen