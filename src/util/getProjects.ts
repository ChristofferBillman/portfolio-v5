import { projectsSE } from '../data/projectsSE'
import getLocale from "./getLocale"

export default function getProjects() {
	switch(getLocale()) {
		case 'EN': return projectsSE.sort((a,b) => a.position - b.position)
		case 'SE': return projectsSE.sort((a,b) => a.position - b.position)
	}
}