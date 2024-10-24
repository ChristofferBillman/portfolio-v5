import { projectsSE } from '../data/projectsSE'
import {projectsEN } from '../data/projectsEN'
import getLocale from "./getLocale"

export default function getProjects() {
	switch(getLocale()) {
		case 'EN': return projectsEN.sort((a,b) => a.position - b.position)
		case 'SE': return projectsSE.sort((a,b) => a.position - b.position)
	}
}