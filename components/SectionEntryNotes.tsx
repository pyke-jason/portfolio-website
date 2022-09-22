interface SectionEntryNotesData {
    notes?: string[];
}


function SectionEntryNotes({ notes }: SectionEntryNotesData) {
    return <>
        <ul>
            {notes && notes.map((x, i) => <li className="text-gray-600 list-disc list-inside" key={i}>{x}</li>)}
        </ul>

    </>
}

export default SectionEntryNotes;