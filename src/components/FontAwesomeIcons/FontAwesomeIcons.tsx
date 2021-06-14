import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  IconDefinition,
  faPlusCircle,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
  faCaretDown,
  faCaretUp,
  faCheck,
  faEllipsisV,
  faList,
  faMinus,
  faPencilAlt,
  faPlus,
  faSave,
  faSignOutAlt,
  faSpinner,
  faSync,
  faTrash,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { IconProps } from './FontAwesomeIcons.types'

interface IconsKeys {
  [key: string]: IconDefinition
}
const icons: IconsKeys = {
  plusCircle: faPlusCircle,
  add: faPlus,
  back: faArrowLeft,
  caretDown: faCaretDown,
  caretUp: faCaretUp,
  check: faCheck,
  close: faTimes,
  delete: faTrash,
  down: faArrowDown,
  edit: faPencilAlt,
  forward: faArrowRight,
  list: faList,
  menu: faEllipsisV,
  refresh: faSync,
  remove: faMinus,
  save: faSave,
  signout: faSignOutAlt,
  spinner: faSpinner,
  up: faArrowUp,
}

const Icon: React.FC<IconProps> = ({ iconName, ...rest }) => {
  return <FontAwesomeIcon icon={icons[iconName]} {...rest} />
}

export default Icon
