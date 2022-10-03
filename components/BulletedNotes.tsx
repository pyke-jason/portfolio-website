interface BulletedNotesData extends React.HTMLAttributes<HTMLElement> {
	notes?: string[];
}

interface BulletedNoteData extends React.HTMLAttributes<HTMLElement> {
	note: string;
}

export function BulletedNote({ note, ...rest }: BulletedNoteData) {
	return (
		<li className="list-disc">
			<span {...rest}>{note}</span>
		</li>
	);
}

function BulletedNotes({ notes, ...rest }: BulletedNotesData) {
	return (
		<>
			<ul {...rest}>
				<div className="pl-4 md:ml-6 space-y-5 text-sm">{notes && notes.map((x, i) => <BulletedNote key={i} note={x} />)}</div>
			</ul>
		</>
	);
}

export default BulletedNotes;
