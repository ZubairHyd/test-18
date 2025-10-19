/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {
  AspectRatio,
  GenerateVideoParams,
  GenerationMode,
  Resolution,
  VeoModel,
} from '../types';
import {FilmIcon} from './icons';

interface Example {
  title: string;
  description: string;
  params: Partial<GenerateVideoParams>;
  icon: React.ReactNode;
}

const matrixExample: Example = {
  title: 'The Matrix Bullet Dodge',
  description:
    'Recreate an iconic slow-motion dodge scene. Provide reference images of a subject and a background to cast them in this classic moment.',
  icon: <FilmIcon className="w-8 h-8 text-green-400" />,
  params: {
    prompt: `Generate a video from the provided reference images depicting a famous 'bullet dodge' scene, specifically a person bending backward to avoid something in slow motion.

Camera Movement: Begin with a dynamic, slightly shaky wide shot of the room, then transition to a very slow-motion, circling camera around the person as they dodge. End with a quick snap zoom on their face after they've dodged.
Lighting: Dark, moody, with sharp reflections on wet surfaces and the glow from broken glass.
Mood/Atmosphere: Hyper-stylized, intense, suspenseful, awe-inspiring.
Pacing: The initial setup should be normal speed, then the dodge itself should be in extreme slow-motion, almost frozen in time, before returning to normal speed for the person's reaction.
Duration: Approximately 10-12 seconds.`,
    mode: GenerationMode.REFERENCES_TO_VIDEO,
    model: VeoModel.VEO,
    aspectRatio: AspectRatio.LANDSCAPE,
    resolution: Resolution.P720,
  },
};

const examples: Example[] = [matrixExample];

interface ExamplePromptsProps {
  onSelectExample: (params: Partial<GenerateVideoParams>) => void;
}

const ExamplePrompts: React.FC<ExamplePromptsProps> = ({onSelectExample}) => {
  return (
    <div className="w-full flex flex-col items-center text-center gap-6 py-8">
      <h2 className="text-3xl font-semibold text-gray-300">
        Start with an Idea
      </h2>
      <p className="text-gray-400 max-w-lg">
        Choose a template to populate the prompt and settings, then add your
        own media to bring it to life.
      </p>
      <div className="grid grid-cols-1 gap-4 w-full max-w-lg mt-4">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onSelectExample(example.params)}
            className="group bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700 rounded-lg p-5 text-left flex items-center gap-5 transition-all hover:border-indigo-500/50 hover:shadow-lg hover:-translate-y-1">
            <div className="bg-gray-900/50 p-4 rounded-full transition-colors group-hover:bg-indigo-600/20">
              {example.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-200">
                {example.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {example.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;
