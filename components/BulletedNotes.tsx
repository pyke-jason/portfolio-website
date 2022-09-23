interface BulletedNotesData {
    notes?: string[];
}

interface BulletedNoteData {
    note: string;
}

export function BulletedNote({ note }: BulletedNoteData) {
    return <li className="text-gray-600 list-disc">{note}</li>
}


function BulletedNotes({ notes }: BulletedNotesData) {
    return <>
        <ul className="md:ml-6 space-y-4 md:space-y-2">
            {notes && notes.map((x, i) => <BulletedNote key={i} note={x} />)}
        </ul>

    </>
}

export default BulletedNotes;