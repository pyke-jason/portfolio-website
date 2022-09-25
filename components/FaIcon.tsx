
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    IconLookup,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core'

interface FaIconData {
    icon: IconLookup;
}

export default function FaIcon({ icon }: FaIconData) {
    return <FontAwesomeIcon icon={findIconDefinition(icon)} />
}