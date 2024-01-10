import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Almaty, Kazakhstan',
		logo: Assets.Unknown,
		name: '',
		organization: 'Kazakh-British Technical University',
		period: { from: new Date(2021, 9, 1), to: new Date() },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['C++', 'Swift', 'Computer Networks', 'Algorithms/Data Structures', 'OOP', 'Algebra', 'Python', 'Java', 'English']
	},
	// {
	// 	degree: 'PhD of Computer Science',
	// 	description: '',
	// 	location: 'USA',
	// 	logo: Assets.Unknown,
	// 	name: '',
	// 	organization: 'MIT',
	// 	period: { from: new Date(2023, 0, 1) },
	// 	shortDescription: '',
	// 	slug: 'dummy-education-item-2',
	// 	subjects: ['Assembly', 'Rust', 'Computer Architecture', 'Algorithms and Data structures']
	// }
];
