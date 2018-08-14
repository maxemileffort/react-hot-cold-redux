import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

import { makeGuess, generateUpdate, restartGame } from '../actions';

export default function Game (props) {
  const { feedback, guesses, auralStatus } = props;
  const guessCount = guesses.length;
  
  
  return (
    <div>
    <Header
    onRestartGame={() => props.dispatch(restartGame())}
    onGenerateAuralUpdate={() => props.dispatch(generateUpdate())}
    />
    <main role="main">
    <GuessSection
    feedback={feedback}
    guessCount={guessCount}
    onMakeGuess={guess => props.dispatch(makeGuess(guess))}
    />
    <StatusSection guesses={guesses} 
    auralStatus={auralStatus}
    />
    <InfoSection />
    </main>
    </div>
  );
}

