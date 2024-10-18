import { projectsSE } from '../data/projectsSE'
import {projectsEN } from '../data/projectsEN'
import getLocale from "./getLocale"

export default function getProjects() {
	switch(getLocale()) {
		case 'EN': return projectsEN
		case 'SE': return projectsSE
	}
}