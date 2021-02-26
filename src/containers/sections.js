import React from 'react';
import { SECTIONS } from '../api/movieEndpoints';
import { Show } from '../components';
import SliderContainer from './slider';

function SectionsContainer({ category, sectionDisplayed }) {
	return (
		<React.Fragment>
			<Show.Sections>
				{SECTIONS[category].sections.map((section, i) => {
					return i < sectionDisplayed && <SliderContainer key={section.title} section={section} />;
				})}
			</Show.Sections>
		</React.Fragment>
	);
}

export default SectionsContainer;
