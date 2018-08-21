import React from 'react';
import Box from './Box';

const App = () =>{
    return (
        <div className="App">
        <Box color="red" backgroundColor="brown" title="Economics 101" subtitle="What they didn't teach you in school" information="FACT: Value is subjective." />
        <Box color="blue" backgroundColor="green" title="Economics 102" subtitle="Important things to remember" information="FACT: Marginal utility decreases as consumption increases." />
        <Box color="green" backgroundColor="pink" title="Economics 103" subtitle="Tough to digest" information="FACT: All practices involving productivity represent a pareto distribution." />
        <Box color="purple" backgroundColor="black" title="Economics 104" subtitle="Where did they go?" information="FACT: Millions of people are now dead because of Communism." />
        <Box color="brown" backgroundColor="red" title="History 101" subtitle="see: Romans" information="FACT: Socialsim and Democracy have failed everywhere they have been tried." />
        <Box color="yellow" backgroundColor="purple" title="Economics 105" subtitle="In my day a pop cost a quarter" information="FACT: Inflation is an increase in the money supply" />
        <Box color="white" backgroundColor="pink" title="Economics 106" subtitle="'He's rich because I'm poor!'" information="FACT: Wealth is not a zero sum game" />
        <Box color="orange" backgroundColor="white" title="Economics 107" subtitle="What is Socialism?" information="FACT: Socialism is when the government does stuff and the more stuff it does the socialist-er it gets." />
        <Box color="pink" backgroundColor="orange" title="Economics 108" subtitle="Laws = opinions with guns" information="FACT: Government always achieves the opposite of it's stated goals." />
        <Box color="black" backgroundColor="yellow" title="Aerodynamics 101" subtitle="Laws of Physics" information="FACT: Helicopters can fly pretty high." />
        </div>
    )
}

export default App;