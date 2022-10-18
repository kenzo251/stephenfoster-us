import { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { Avatar, Button, Paper, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Grid, Fade, Typography, Zoom } from '@mui/material';

export const WritingIds = {
  //Larger categories
  WHATS_NEW: "whats-new",
  STORYTREE: "storytree",
  MUSIC: "music",
  SC2: "sc2",
  DONT_TEACH_CODING: "dont-teach-coding",
  TEACHING: "teaching",
  THOUGHTSTEM: "thoughtstem",
  MINECRAFT: "minecraft",
  CODING: "coding",
  GAMBIT_QUEEN: "gambit_queen",
  CODESPELLS: "codespells",
  DEAR_HUMAN: "dear_human",
  DOLLYS_DRAGON: "dollys-dragon",
  OVER_THE_HILLS: "over-the-hills",
  NIGHTMARE: "nightmare",
  SPIRITSTONE: "spiritstone",
  SCIENCE: "science",
  SHORT_STORIES: "short_stories",
  UNFINISHED_NOVELS: "unfinished_novels",
  VISUAL_ARTS: "visual_arts",
  PHILOSOPHY: "philosophy",


  //Smaller one-ffs
  CODING_FOR_BABIES: "coding-for-babies",
  POLITE_BARBARIANS: "polite-barbarians",
  JONNY_VAMPIRE: "jonny-vampire",
}

export const OfficialCoverArts = {
  [WritingIds.WHATS_NEW]: "hacker.png",
  [WritingIds.CODING]: "gandalf-with-computer.jpg",
}

export const ClickHere = (props) => {
	return <Fade in={true} timeout={1000}><span style={{ textDecoration: "underline" }}>Click</span></Fade>
}

export const WritingLink = (props) => {
	const history = useHistory()
	const [elevation, setElevation] = useState(1)
	const [showContent, setShowContent] = useState(false)

	return <>
		<a style={{ cursor: "pointer" }} onClick={() => {
			history.push("/" + props.slug)
			window.scrollTo(0, 0)
		}}>
			<Card
				onMouseOver={() => { setElevation(2); setShowContent(true) }}
				onMouseLeave={() => { setElevation(1); setShowContent(false) }}
				elevation={elevation}>
				{!props.img ? "" :
					<CardMedia style={{
						"background": "url(" + props.img + ")",
						backgroundSize:
							props.backgroundSize ? props.backgroundSize : "cover",
						backgroundPosition:
							props.backgroundPosition ? props.backgroundPosition : "0% 0%",
						height: 300, opacity: elevation == 1 ? 0.80 : 1
					}}>
						<Fade in={true} timeout={5000}>
							<div>
								<CardContent style={{ color: "white", backgroundColor: "rgba(0,0,0,.75)" }}>
									{props.title}
									{(showContent || props.showContent) ? <div style={{ marginTop: 15 }}>{props.summary}</div> : ""}
								</CardContent>
							</div>
						</Fade>
					</CardMedia>
				}
			</Card>
		</a>
	</>
}


export let WritingLinkCard = (props) => {
    if(props.writingId == WritingIds.STORYTREE)
        return <WritingLink
            title="The Storytree"
            img="tree-with-eyes2.jpg"
            slug="storytree"
            //backgroundPosition="center bottom"
            summary={[<ClickHere />, " if you like science fiction novels about evil trees."]}
        />

    if(props.writingId == WritingIds.MUSIC)
		return <WritingLink
					title="Music"
					img="cubist-violin.jpg"
					slug="music"
					summary={["I'm on a quest to become a better musician.  ", <ClickHere />, " if you're interested in music and the learning thereof."]}
				/>

    if(props.writingId == WritingIds.SC2)
		return <WritingLink
					title="StarCraft II"
					img="sc2.png"
					slug="starcraft-ii"
					summary={["I play and am not very good.  ", <ClickHere />, " to learn more about my quest to master this very difficult game.", <p>(This art piece was done with style-transfer, unlike the others.)</p>]}
				/>

    if(props.writingId == WritingIds.CODING_FOR_BABIES)
	    return <WritingLink
					title="Coding for Babies"
					img="baby.png"
					backgroundPosition="center center"
					slug="coding-for-babies"
					summary={["A satire on coding education. ", <ClickHere />, " if you're a programming language nerd, and/or if you're interested in computer science education."]}
				/>

    if(props.writingId == WritingIds.POLITE_BARBARIANS)
		return <WritingLink
					title="The Polite Barbarians"
					img="troy.png"
					slug="the-polite-barbarians"
					summary={["A silly short story about Trojan horses that I wrote for no particular reason. ", <ClickHere />, " if you like silly fiction that isn't too long (about a 5 minute read)."]}
				/>

    if(props.writingId == WritingIds.JONNY_VAMPIRE)
		return <WritingLink
					title="Jonny Vampire"
					img="vampire3.jpg"
					slug="jonny-vampire"
					summary={["A short story I wrote when I was 18."]}
				/>


    if(props.writingId == WritingIds.DONT_TEACH_CODING)
		return <WritingLink
					title="Don't Teach Coding"
					img="sci-fi-tablet.jpg"
					slug="dont-teach-coding"
					summary={["I wrote a book about teaching and learning coding. ", <ClickHere />, " to learn more, or to buy it."]}
				/>

    if(props.writingId == WritingIds.TEACHING)
		return <WritingLink
					title="Teaching"
					img="socrates-kinkade.jpg"
					slug="teaching"
					summary={["I teach at Olympic College.  ", <ClickHere />, " if you're a student or educator in computing."]}
				/>

    if(props.writingId == WritingIds.THOUGHTSTEM)
		return <WritingLink
					title="ThoughtSTEM"
					img="circuit-board.jpg"
					slug="software-consulting"
					summary={["I run a software consulting company.  ", <ClickHere />, " if you're curious about our past projects, or if you're looking for software consulting."]}
				/>

    if(props.writingId == WritingIds.MINECRAFT)
		return <WritingLink
					title="Minecraft"
					img="minecraft.jpg"
					slug="minecraft"
					backgroundPosition="center top"
					summary={["I've worked professionally with Minecraft for many years.  ", <ClickHere />, " if you like Minecraft, coding, and games in education."]}
				/>

    if(props.writingId == WritingIds.CODING)
		return <WritingLink
					title="Coding"
			        img={ OfficialCoverArts[WritingIds.CODING] }
					slug="coding"
					backgroundPosition="center bottom"
					backgroundSize="auto"
					summary={["I've been coding for a long time.  ", <ClickHere />, " if you like coding."]}
				/>

    if(props.writingId == WritingIds.GAMBIT_QUEEN)
		return <WritingLink
					title="Gambit Queen"
					img="girl-secret-agent-chess.jpg"
					slug="gambit-queen"
					//backgroundPosition="top right"
					summary={[<ClickHere />, " if you like young adult sci-fi novels about secret schools for spies."]}
				/>

    if(props.writingId == WritingIds.CODESPELLS)
		return <WritingLink
					title="CodeSpells"
					img="codespells.jpg"
					slug="codespells"
					backgroundPosition="center bottom"
					backgroundSize="fit"
					summary={["I once released an indie game about coding your own magic spells.  ", <ClickHere />, " if you like magic and end user programming.", <p>(Also, this is the one piece of art on this page that wasn't generated by ai.)</p>]}
				/>

    if(props.writingId == WritingIds.DEAR_HUMAN)
		return <WritingLink
					title="Dear Human"
					img="desert-demon.jpg"
					slug="dear-human"
					//backgroundPosition="top right"
					summary={[<ClickHere />, " here if you like magical murder mysteries and psychological thrillers."]}
				/>

    if(props.writingId == WritingIds.DOLLYS_DRAGON)
		return <WritingLink
					title="Dolly's Dragon"
					img="egg.png"
					slug="dollys-dragon"
					backgroundPosition="center bottom"
					summary={["When I was 13, I wrote a book. ", <ClickHere />, " if you like innocent high fantasy about dragons."]}
				/>

    if(props.writingId == WritingIds.OVER_THE_HILLS)
		return <WritingLink
					title="Over the Hills"
					img="demon-on-tower.jpg"
					slug="over-the-hills"
					summary={[<ClickHere />, " if you like dark fantasy novels about wizards breaking out of prison."]}
				/>

    if(props.writingId == WritingIds.NIGHTMARE)
		return <WritingLink
					title="Nightmare"
					img="nightmare-world.jpg"
					slug="nightmare"
					//backgroundPosition="center bottom"
					summary={[<ClickHere />, " if you like dark fantasy about rifts between our world and the nightmares beyond."]}
				/>

    if(props.writingId == WritingIds.SPIRITSTONE)
		return <WritingLink
					title="Spiritstone Chronicles"
					img="skyship.jpg"
					slug="spiritstone"
					//backgroundPosition="center bottom"
					//backgroundSize="auto"
					summary={[<ClickHere />, " if you like fantasy novels about flying ships."]}
				/>

    if(props.writingId == WritingIds.SCIENCE)
		return <WritingLink
					title="Scientific Research"
					img="alchemy.jpg"
					slug="science"
					summary={["Once upon a time, I went to grad school and did research.  ", <ClickHere />, " if you like human-computer interaction and coding education research."]}
				/>

    if(props.writingId == WritingIds.SHORT_STORIES)
		return <WritingLink
					title="Short Stories"
					img="wizard-books.jpg"
					slug="shortstories"
					summary={["I've written a lot of short fiction over the years. ", <ClickHere />, " if you like weird stuff that you can finish in one sitting."]}
				/>

    if(props.writingId == WritingIds.UNFINISHED_NOVELS)
		return <WritingLink
					title="Unfinished Novels"
					img="ancient-books.jpg"
					slug="unfinished-works"
					summary={["I don't finish all the works I start...."]}
				/>

    if(props.writingId == WritingIds.VISUAL_ARTS)
		return <WritingLink
					title="Visual Arts"
					img="weird-woman.jpg"
					slug="visual-arts"
					summary={["I've been dabbling with digital art for a long time now -- most recently ai-generated art.  ", <ClickHere />, " if you like looking at weird stuff."]}
				/>

    if(props.writingId == WritingIds.PHILOSOPHY)
		return <WritingLink
					title="Philosophy"
					img="black-and-green-typewriter.jpg"
					slug="philosophy"
					summary={["Many years ago, I majored in philosophy.  ", <ClickHere />, " for a wild ride."]}
				/>

    return "UNKNOWN WRITING: " + props.writingId
}