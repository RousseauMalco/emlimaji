export function renderMembers(props) {
    if(props.members && props.members.length > 0)
    {
        return (
            <p>
            {props.members}
            </p>
        );
    }
    else
    {
        return(
            <p>
                No teams yet
            </p>
        );
    }

}