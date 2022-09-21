interface SectionEntryNotesData {
    notes?: string[];
}


function SectionEntryNotes({ notes }: SectionEntryNotesData) {
    return <>
        <ul>
            {notes && notes.map((x, i) => <li key={i}>{x}</li>)}
        </ul>

    </>
}

export default SectionEntryNotes;