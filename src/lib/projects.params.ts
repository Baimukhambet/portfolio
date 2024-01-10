import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';
import { base } from '$app/paths';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'slick-portfolio-prompter-ai',
		color: '#5e95e3',
		description:
			'Application for enhancing prompts for AI',
		shortDescription:
			'Application for enhancing prompts for AI',
		links: [{ to: 'https://github.com/Baimukhambet/nFactorial-PrompterAI', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'PrompterAI',
		period: {
			from: new Date(2023, 6, 1)
		},
		skills: getSkills('swift'),
		type: 'iOS App'
	},
	{
		slug: 'slick-portfolio-notes-pro',
		color: '#5e95e3',
		description:
			'Notes app with fancy design. Stack: UIKit, Swift, CoreData, programmatic UI',
		shortDescription:
			'Notes app with fancy design',
		links: [{ to: 'https://github.com/Baimukhambet/iOS-NotesPro', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'NotesPro',
		period: {
			from: new Date(2023, 7, 1)
		},
		skills: getSkills('swift'),
		type: 'iOS App'
	},
	{
		slug: 'slick-portfolio-svelte',
		color: '#ff3e00',
		description:
			'Mobile version of a table game \'Machikoro\'',
		shortDescription:
			'Mobile version of a table game \'Machikoro\'',
		links: [{ to: 'https://github.com/Baimukhambet/iOS-Machikoro', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Machikoro',
		period: {
			from: new Date(2023, 11, 1)
		},
		skills: getSkills('swift', 'firebase'),
		type: 'iOS Online Game',
	}
];

export default MY_PROJECTS;
