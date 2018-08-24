import React, { Component } from 'react';
import Hero from './Hero'

const HerosList = () => {

    const heros = [
        {
            name: "Stefan Molyneux",
            image: "https://themccarthychronicles.files.wordpress.com/2017/06/maxresdefault.jpg?w=700",
            saying: "If you are for gun control, then you are not against guns, because the guns will be needed to disarm people. So it’s not that you are anti-gun. You’ll need the police’s guns to take away other people’s guns. So you’re very pro-gun; you just believe that only the Government (which is, of course, so reliable, honest, moral and virtuous…) should be allowed to have guns. There is no such thing as gun control. There is only centralizing gun ownership in the hands of a small political elite and their minions.",
            say: function(){
                alert(this.saying)
            }
        },{
            name: "Hans Herman Hoppe",
            image: "http://www.amren.com/wp-content/uploads/2013/10/HansHermannHoppe.jpg",
            saying: "What is true, just, and beautiful is not determined by popular vote. The masses everywhere are ignorant, short-sighted, motivated by envy, and easy to fool. Democratic politicians must appeal to these masses in order to be elected. Whoever is the best demagogue will win. Almost by necessity, then, democracy will lead to the perversion of truth, justice and beauty.",
            say: function(){
                alert(this.saying)
            }
        },{
            name: "Augusto Pinochet",
            image: "https://journalismisnotacrime.com/media/uploads/2015/06/29/augusto-pinochet_ORNuupi.jpg",
            saying: "Everything has a price, amigo.",
            say: function(){
                alert(this.saying)
            }
        }
    ]

    const displayHeros = heros.map((hero, i) =>{
        hero.say = hero.say.bind(hero)
        return <Hero key={hero.name+i}
                     hero={hero} />
    })

        return(
            <div>
                <h1>Modern Day Heroes</h1>
                {displayHeros}
            </div>
        )

}

export default HerosList