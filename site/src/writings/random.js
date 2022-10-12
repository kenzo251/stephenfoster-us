//TODO: Factor blog posts into separate files now that we're trying to post daily...

import { useState } from "react";

import ReactMarkdown from 'react-markdown';

import useWindowSize from 'react-use/lib/useWindowSize'
import ReactPlayer from 'react-player/lazy';
import { Button, Card, CardContent} from '@mui/material';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../App.css';
import moment from 'moment'

const localizer = momentLocalizer(moment)

let VideoDemo = (props) => { 
  const [videoEnded, setVideoEnded] = useState(false)
  const { width, height } = useWindowSize()

  return <>
    <ReactPlayer
      url="react-player-demo.mp4"
      controls={true}
      onStart={() => { setVideoEnded(false) }}
      onEnded={() => { setVideoEnded(true) }}
    /> 
    {videoEnded ? <>
      <Button onClick={() => { setVideoEnded(false)}}>It happened!  (Click to undo)</Button>
    </> : ""}
  </>
}

let MyReactMarkdown = (props) =>
  <ReactMarkdown //TODO: Factor this (and the ReactMarkdown on the homepage) into a single shared util file...
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }} 
  >{ props.children }</ReactMarkdown>


let CustomEvent = (props) => { return props.event.title }


export const text =
  [
    <MyReactMarkdown>{`
# Upcoming Events


`}</MyReactMarkdown>,

<Calendar
  localizer={localizer}
  views={["month"]}
  defaultDate={ new Date(2022,9,11)} 
  events={[
    { id: 0,
      title: <>Blog Post<br/><img src="hacker.png" width="100%" /></>,
      start: "2022-10-12T07:00:00.000Z",
      end: "2022-10-12T07:00:00.000Z",
    },
    { id: 0,
      title: <>Refactoring<br/><img src="hacker.png" width="100%" /></>,
      start: "2022-10-13T07:00:00.000Z",
      end: "2022-10-13T07:00:00.000Z",
    },
    { id: 1,
      title: <>Storytree<br/><img src="tree-with-eyes2.jpg" width="100%" /></>,
      start: "2022-10-14T07:00:00.000Z",
      end: "2022-10-14T07:00:00.000Z",
    }  ,
]}
startAccessor="start"
endAccessor="end"
style={{ height: 1000 }}
/>
,
    //Oct 12
    <MyReactMarkdown>{`
# October 11th, 2022 - Wednesday

Made a prototype of the Upcoming Events calendar (see above).

Next steps: Refactor.  Start populating it. 

`}</MyReactMarkdown>,

    //Oct 11
    <MyReactMarkdown>{`
# October 11th, 2022 - Tuesday 

Added text to homepage today:

> *I'm a software architect, designer, b/vlogger, novelist, professor, and many other things. Although it'll take me years, I'm currently working to consolodate my various projects in one place.*

> *Welcome to my site.*

I'll probably change it (and the intro video) many times as this project evolves, but it's important
to start somewhere.

A few things I'd like to accomplish in the upcoming weeks:

* Finalize all landing pages reachable from homepage tiles
* Fix the "Contact Me" button
* Start setting a schedule for content production 

I installed \`react-big-calendar\` to help me communicate my schedule when the time comes.
`}</MyReactMarkdown>,
<Calendar
  localizer={localizer}
  views={["month"]}
  defaultDate={ new Date(2022,9,11)} 
  events={[
    { id: 0,
      title: "Hello, World",
      allDay: true,
      start: "2022-10-11T07:00:00.000Z",
      end: "2022-10-11T07:00:00.000Z",
    }  
]}
startAccessor="start"
endAccessor="end"
style={{ height: 500 }}
/>
,

    
//Oct 10
<MyReactMarkdown>{`
# October 10th, 2022 - Monday 

I created my new homepage video today.  

I want to make a big shout out to the makers of the \`react-player\` library.  Very nice!  Quick demo:

\`\`\`js
import ReactPlayer from 'react-player/lazy';

let CoolThing = (props) =>
  <ReactPlayer 
    url="whatever" 
    onEnded={()=>{
      //Set your react state here...
    }}
  />
\`\`\`

You can easily display, for example, a button that shows up only after the video is complete:
`}</MyReactMarkdown>,

<VideoDemo />,

<ReactMarkdown>{`
# October 9th, 2022 - Sunday

Hello, World! 

I began rebuilding this website in September, and I finally decided to start blogging about my progress.
I'll try to use blogs posts to communicate what's new with the very, very large
undertaking.  

`}</ReactMarkdown>]
  
  /*
      Old notes
*  **Main goal**: Finish basic landing page for all homepage tiles
* **Current subgoal**: Finish all art info comments on landing pages.  Do page about homepage tile contest

* Books (TODO: Make tiles)
  - DONE: [Short Story Collection](/#/short-stories)
  - DONE: [Spiritstone Chronicles](/#/spiritstone-chronicles)
  - DONE: [Over the Hills](/#/over-the-hills)
  - DONE: [Nightmare](/#/nightmare) / Nightrift?
  - DONE: [Gambit Queen](/#/gambit-queen)
  - DONE: [Storytree](/#/storytree)
  - DONE: [Dear Human](/#/dear-human)
  - DONE: [Dolly's Dragon](/#/dollys-dragon)
  - DONE: [Don't Teach Coding](/#/dont-teach-coding)
  - DONE(ish): [Minecraft Modding for Dummies](/#/out-of-print)
     * Make a link to it on the minecraft page (possibly use for-dummies.jpg for the tile link)
* DONE (Removed tile but still have the page if we need it later) [About Me](/#/about-me)
* DONE (Will put under OC tile) [For My Students](/#/for-my-students)
* Ongoing Blogs (which may each get their own homepage tile?):
  * Coding (past projects, github stuff?) 
  * (Don't do?  Crosscutting?) [Videos](/#/videos)
  * DONE [Philosophy](/#/philosophy)
  * DONE [Art](/#/art)
  * DONE [Music](/#/music)
* [Past Projects](/#/past-projects)
  - [DONE] CodeSpells 
  - [DONE] Ph.D. Work / Scientific Research / Grants etc
* Current Projects:
  - [DONE] ThoughtSTEM
  - [DONE] Olympic College

#### TODOs


* Finish basic structure:
  - [DONE, I think...] Make complete (draft) set of homepage tiles
  - [DONE for now] Polish up homepage tiles: 
    * [DONE for now] Standardize language: Start tile descriptions with "I..."
    * [DONE for now] Finalize images
  - Make landing pages for all homepage tiles (add coming soon or placeholder text, release dates, etc)
    - [DONE] DTC
    - Music
      * Music side-project: Fix bugs with play button (or just leave commented out...)
      * ...

* [0.0.1 or 0.0.2?] Design good online reading experience:
  - Pick some piece of text and decide how best to typeset / animate / audio / video?
  - Allow website users to subscribe to be notified of fresh content (ask a few people to help me beta test this)
  - Begin releasing one book (with regular schedule)

* Add google analytics, test
* Do 0.0.1 release.  Change email signatures, linkedin, oc bio, etc... 
* Figure out release schedule for various stories
* Teaser videos for various landing pages?


#### Dev log

* 10/2/2022 - Added art for CodeSpells and Dear Human
* 10/1/2022 - Added all art info comments for DTC, Teaching, ThoughtSTEM, Minecraft, Gambit Queen, Coding tiles.   About 14 to go?
* 9/30/2022 - Added all Dolly's Dragon and Music homepage contest tiles
* 9/29/2022 - Began working on landing pages: ArtInfoComments  
* 9/28/2022 - Better link colors.  Fixed image sizes in documents.  Revised Don't Teach Coding page.
* 9/23/2022 - Explored typesetting music.  Because I like playing violin, but I haven't been putting it on my website because this was a blocker.
* 9/27/2022 - Began designing the FullDocument, also a contact me side card
* 9/19/2022 - RELEASED new version
* 9/18/2022 - LOTS more tiles
* 9/17/2022 - Purchased Nightcafe -- might as well!  Added Minecraft tile to homepage.
* 9/16/2022 - Decided to remove about me tile, making it a link instead. Added more links above -- more work for homepage tiles...
* 9/15/2022 - Did a nice fade and mouse over effect for homepage.  Added Dolly's Dragon tile 
* 9/14/2022 - Made the text visible on top of the homepage image tiles.  TODO: Bring back about me tile!  Added sc2 tile to homepage.  Added images on the content landing pages.
* 9/13/2022 - Made website tiles have pictures only.  Still not sure if this is the best (maybe add back the titles?).  Might need some A/B tests.  Oops lost the about me...  TODO: Add in fade
* 9/12/2022 - Switched to darkmode.  Learned that it takes a long time to add a new top-level tile to the homepage, should shorten this process (but should decide first how much content deserves a full tile...).  TODO: Maybe make a script.  Started a wiki on the [random](/#/random) page.  Considered that maybe a wiki would make a better homepage, or at least that the homepage could have more text on it...

*/