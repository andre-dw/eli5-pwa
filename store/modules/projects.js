import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'
export default {
	namespaced: true,
	state: {
		projects: [
			{
				id: 0,
				slug: 'sally',
				highlighted: true,
				header: {
					title: 'Sally.',
					category: 'Software as a service',
					sub_title: 'Eli5 designed and developed the customer friendliest way to close deals. Sally is set up as a SAAS product that allows its users to easily create, send, and manage proposals.',
					image: '//cdn.prod1.eli5.io/img/projects/sally/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/sally/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/sally/preview.jpg',
					video: null,
				},
				intro: {
					title: 'When Eli5 met Sally.',
					description: 'For Sally we developed a state of the art web application to enable her users to create and send slick proposals. Users of Sally don’t need to fight anymore with Word, Google Docs, or Powerpoint to create proposals. Via Sally’s interface, creating and sending proposals is as easy as 1, 2, 3.<br /><br />Once the proposal is sent to a potential client, the client will experience a easy and structured way to view the user’s proposal. In a user friendly environment, the client is able to view, comment, and confirm the user’s proposal.<br /><br />Sally is set up as a SaaS product, starting for free for freelancers to custom made solutions for enterprise clients. Eli5 has designed and developed Sally completely from scratch, using the industries latest technologies regarding front- and back-end technology, security, and payment processing.<br /><br />A cutting-edge digital solution giving a new meaning to asap: as Sally as possible.',
					list: {
						title: 'Our services',
						items: [
							'Concept Development',
							'User Experience Design',
							'User Interface Design ',
							'Back-end Development',
							'Front-end Development',
							'Brand Identity',
							'Product Strategy',
							'Hosting'
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/sally/image_1.jpg',
						alt: 'Sally logo'
					},
					{
						id: 2,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/sally/image_2.jpg',
						alt: 'Sally web'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/sally/image_3.jpg',
						alt: 'Sally dashboard'
					},
					{
						id: 4,
						type: 'text',
						title: 'Every pixel is focused on the user of the application.',
						text: 'We designed and developed Sally to be the most user friendly application to close deal. We’ve cut out the clutter, leaving you only the things you need.'
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/sally/image_4.jpg',
						alt: 'Sally clients'
					}
				]
			},
			{
				id: 2,
				slug: 'the-office-service',
				highlighted: true,
				header: {
					title: 'The Office Service',
					category: 'On-demand service platform',
					sub_title: 'We created a highly scalable platform for The Office Service to deliver on-demand services to companies such as: Uber, ING, Booking.com, and WeWork.',
					image: '//cdn.prod1.eli5.io/img/projects/tos/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/tos/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/tos/preview.jpg',
					video: '/video/tos.mp4',
				},
				intro: {
					title: 'A platform full of personal services for office environments.',
					description: 'The Office Service delivers high quality services within office environments. Among their clients you’ll find Uber, ING, Spaces, and many more. The platform makes the life of their users a lot easier by offering them services like Car Wash, Hairdressing, Dry Cleaning, Shoe- and Clothing Repair, Massages, and so on. Their client base is growing rapidly as the demand for personal services is increasing. From big corporates to co-working spaces, the forward thinking organisations all want to improve their efficiency and The Office Service is doing their part to make this happen. <br /><br />Eli5 has built an innovative, scalable, and user centric platform that can be customised for every client The Office Service has. With Eli5 as a shareholder of the company, The Office Service is guaranteed to have a solid partner for all their needs.',
					list: {
						title: 'Our services',
						items: [
							'User Experience Design',
							'User Interface Design ',
							'Back-end Development',
							'Front-end Development',
							'Brand Identity',
							'Product Strategy',
							'Hosting'
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_1.jpg',
						alt: 'The Office Service logo'
					},
					{
						id: 2,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_2.jpg',
						alt: 'Website'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_3.jpg',
						alt: 'Dashboard'
					},
					{
						id: 4,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_4.jpg',
						alt: 'Dashboard'
					},
					{
						id: 5,
						type: 'text',
						title: 'Convenience in the palm of your hand.',
						text: 'The Office Service delivers high quality services within office environments. Among their clients you’ll find Uber, ING, Spaces, and many more.'
					},
					{
						id: 6,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_5.jpg',
						alt: 'Mobile'
					},
					{
						id: 7,
						type: 'text',
						title: 'Grip on the product: dashboards for clients, suppliers, and for team of The Office Service. ',
						text: 'To enable The Office Service’s crew to focus on things that matter, we created a fully custom built dashboard for their clients, suppliers, and their own team.'
					},
					{
						id: 8,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/tos/image_6.jpg',
						alt: 'Admin'
					},
				]
			},
			{
				id: 4,
				slug: 'iemand-nl',
				highlighted: false,
				header: {
					title: 'Iemand.nl',
					category: 'Responsive blog website',
					sub_title: 'Within two weeks we delivered the online news section for the Dutch start-up iemand.nl.',
					image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/preview.jpg',
					video: '',
				},
				intro: {
					title: 'Iemand.nl asked us to deliver a custom blog website, in no-time.',
					description: 'For Iemand.nl we have made a blog website, running on Wordpress, and launched it on blog.iemand.nl. It’s the first work for the company done by Eli5. When the people of Iemand.nl came to us, they needed the product in no-time. As much as we like to get things done, we designed and developed the website in two weeks. <br /><br />Iemand.nl is a Dutch start-up focussing on cleaning service. Via the platform, which is available via their website or their mobile app, they connect clients and cleaning professionals with each other. This way they create a low treshold and reliable way to book cleaners. Their goals is to have national coverage in The Netherlands, Eli5 is happy to help them reach their goal! ',
					list: {
						title: 'Our services',
						items: [
							'User Interface Design ',
							'Wordpress Development',
							'Hosting'
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/image_1.jpg',
						alt: 'Mobile'
					},
					{
						id: 2,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/image_2.jpg',
						alt: 'Website home'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/image_3.jpg',
						alt: 'Website blog'
					},
					{
						id: 4,
						type: 'text',
						title: 'No third party plugins, perfectly secured.',
						text: 'Since security was a big requirement, we developed every element in-house. No third party plugins and the website is hosted in our own secured environment.'
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/iemand-nl/image_4.jpg',
						alt: 'Website about'
					}
				]
			},
			{
				id: 1,
				slug: 'esomar-ana',
				highlighted: true,
				header: {
					title: 'Esomar: ANA',
					category: 'AI driven search engine',
					sub_title: 'For Esomar World Reseach our team created a web based search engine based on IBM Watson.',
					image: '//cdn.prod1.eli5.io/img/projects/esomar/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/esomar/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/esomar/preview.jpg',
					video: '',
				},
				intro: {
					title: 'An AI driven search engine for market research based on IBM Watson.',
					description: 'A search interface, perhaps not the most sexy thing we\'ve ever built. Yet Esomar\'s ANA is definitely one of the most exciting things we\'ve worked on. In close collaboration with Esomar and Tapp, we\'ve develop ANA: an intelligent search engine for market research. Ana already learned a lot and is still learning more about market research with the goal to give immediate and relevant results and answers to the questions asked by its members. <br /><br />Ana currently accesses 7.500 documents spanning seventy years of Esomar papers, webinars, books, and reports.',
					list: {
						title: 'Our services',
						items: [
							'User Research',
							'User Experience Design',
							'User Interface Design',
							'Back-end Development',
							'Front-end Development'
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/esomar/image_1.jpg',
						alt: 'Mobile'
					},
					{
						id: 2,
						type: 'text',
						title: 'A step in the right direction.',
						text: 'Creating an AI search engine for  market research is allowing Esomar’s members to find better results in a more efficient way.'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/esomar/image_2.jpg',
						alt: 'Esomar home'
					},
					{
						id: 4,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/esomar/image_3.jpg',
						alt: 'Esomar search'
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/esomar/image_4.jpg',
						alt: 'Esomar article'
					},
				]
			},
			{
				id: 3,
				slug: 'blik',
				highlighted: true,
				header: {
					title: 'Blik',
					category: 'Native iOS and Android app',
					sub_title: 'Together with Her Royal Highness Princess Laurentien’s Reading and Writing Foundation, we’ve built Blik. An app that helps low-literacy patients understand the documents, invoices, and letters they encouter in their day-to-day life.',
					image: '//cdn.prod1.eli5.io/img/projects/blik/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/blik/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/blik/preview.jpg',
					video: '',
				},
				intro: {
					title: 'Designed for accesibility, Blik is helping low-literacy patients understand documents.',
					description: 'About 1,3 million adults in the Netherlands have difficulties with reading and writing. They face obstacles in their attempts to participate in modern society and often feel excluded. We have created a mobile application where a person who’s having difficulties with reading and writing can get help of volunteers. The user can upload a photo of a document where they need help with. A volunteer connected to the foundation helps the user to understand documents better by telling them what a documents says and what kind of actions the user should take (ie. paying a bill). To facilitate this proces for the volunteer we\'ve built a dynamic web application that is able to record audio, which will be send to the users phone. ',
					list: {
						title: 'Our services',
						items: [
							'User Research',
							'User Experience Design',
							'User Interface Design',
							'App Development',
							'Back-end Developmen',
							'Front-end Development',
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/blik/image_1.jpg',
						alt: 'Blik mobile'
					},
					{
						id: 2,
						type: 'text',
						title: 'Using photo’s to communicate with the voluntary worker.',
						text: 'If users encouter a document that is hard to understand, they only need to snap a photo of it. These photos will be send to voluntary workers connected to the foundation. Via our custom made dashboard voluntary workers can easily record audio messages that will be pushed to the device of the user.'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/blik/image_2.jpg',
						alt: 'Blik mobile'
					},
					{
						id: 4,
						type: 'text',
						title: 'A simplistic overview and audio player.',
						text: 'All documents are saved in a simplistic overview so the user can always look back at documents that have been sent. Via the audio player users can easily give feedback to the foundation. If the given explanation wasn’t helpful, a voluntary worker will contact them to discuss the document.'
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/blik/image_3.jpg',
						alt: 'Blik mobile'
					},

				]
			},
			{
				id: 6,
				slug: 'prid',
				highlighted: false,
				header: {
					title: 'PRiD',
					category: 'Responsive company website',
					sub_title: 'Public Relations In Design offers PR services to design related companies. We designed and developed a website to showcase their portfolio, clients, and services. ',
					image: '//cdn.prod1.eli5.io//img/projects/prid/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/prid/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/prid/preview.jpg',
					video: '',
				},
				intro: {
					title: 'We love projects where we can go all out with fashionable design. PRiD was the perfect project for that.',
					description: 'Sometimes things just fall in their place. We stumbled upon this gem of a project that was still in the early stage of having a complete blank canvas. Our design team kicked off the project with a design thinking workshop to find out what the guidelines for the project would be. Having the guidelines defined, we headed into the design phase which included website and also the brand identity for PRiD. In close collaboration with the team of PRiD we designed and developed their website. According to the demands we’ve built the website based on Wordpress, to make sure that the team of PRiD cab easily create and manage all the content on the website. ',
					list: {
						title: 'Our services',
						items: [
							'User Experience Design',
							'User Interface Design',
							'Wordpress Development',
							'Front-end Development',
							'Brand Identity Design',
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/prid/image_3.jpg',
						alt: 'PRiD blog'
					},
					{
						id: 2,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/prid/image_2.jpg',
						alt: 'PRiD article'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/prid/image_4.jpg',
						alt: 'PRiD Media'
					},
					{
						id: 4,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/prid/image_5.jpg',
						alt: 'PRiD Mobile'
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/prid/image_1.jpg',
						alt: 'PRiD Logo'
					},

				]
			},
			{
				id: 5,
				slug: 'e-democracy',
				highlighted: false,
				header: {
					title: 'E-Democracy',
					category: 'Native iOS and Android app',
					sub_title: 'Our team designed and developed a mobile app to make participation within organisation easy and fast.',
					image: '//cdn.prod1.eli5.io/img/projects/e-democracy/header_new.jpg',
					device_image: '//cdn.prod1.eli5.io/img/projects/e-democracy/header_preview.png',
					preview_image: '//cdn.prod1.eli5.io/img/projects/e-democracy/preview.jpg',
					video: '',
				},
				intro: {
					title: 'Designed for large organisations, this app anables employees to participate in a easy and low treshold way.',
					description: 'Employees Councils and managers within large organisations experience more and more difficulty to have enough contact with their employees. These councils and managers try to reduce this distance by setting out employee satisfaction surveys. But does this work? Or are these surveys just costing a lot of money and are they just a big wast of time? <br /><br />Eli5 designed and developed a mobile app for E-Democracy to make participation within large organisation easy. By using the app, employees are back in charge and are able to vote on polls that are set up by councils and managers.',
					list: {
						title: 'Our services',
						items: [
							'User Research',
							'User Experience Design',
							'User Interface Design ',
							'App development',
							'Back-end Development',
							'Front-end Development'
						]
					}
				},
				sections: [
					{
						id: 1,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/e-democracy/image_1.jpg',
						alt: 'E-democracy mobile'
					},
					{
						id: 2,
						type: 'text',
						title: 'Users have full control over what they see.',
						text: 'To make sure that users don’t get spammed with polls they don’t want to participate in, we’ve put them in charge over what groups they want to be in.'
					},
					{
						id: 3,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/e-democracy/image_2.jpg',
						alt: 'E-democracy mobile'
					},
					{
						id: 4,
						type: 'text',
						title: 'A custom built dashboard to manage all clients, polls, and users.',
						text: 'To make sure that E-Democracy is able to manage all of their clients, polls, and users, we’ve built a dashboard especially designed for the management of their app. '
					},
					{
						id: 5,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/e-democracy/image_3.jpg',
						alt: 'E-democracy admin'
					},
					{
						id: 6,
						type: 'image',
						image: '//cdn.prod1.eli5.io/img/projects/e-democracy/image_4.jpg',
						alt: 'E-democracy admin'
					},

				]
			}
		]
	},
	getters: {
		bySlug: (state) => (slug) => {
			return state.projects.find(project => project.slug == slug)
		},
		projects: (state)	=> (highlighted) => {
			const projects = orderBy(state.projects, ['id'], ['asc'])
			if(highlighted) {
				return filter(projects, 'highlighted')
			} else {
				return projects
			}
		},
	}
}