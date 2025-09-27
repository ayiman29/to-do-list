export default function Display(props) {
    function deleteTask() {
        props.setTask(prev => prev.filter(t => t !== props.entry));

        props.setDoneTask(prev => {
            const updated = prev.length >= 10 ? prev.slice(1) : prev;
            return [...updated, props.entry];
        });
    }



    return (
        <div className="entry-container">
            <p className="entry">{props.entry}</p>
            <button className="delete-button" onClick={deleteTask}>DONE</button>

        </div>
    );
}
